import React, { useState, useEffect } from 'react';
import styles from './interactive.module.css';

/**
 * SalaryTaxCalculator Component
 * Interactive calculator for Vietnamese personal income tax
 * Based on 2024 tax regulations
 */
export default function SalaryTaxCalculator({ defaultSalary = 13000000 }) {
  const [grossSalary, setGrossSalary] = useState(defaultSalary);
  const [dependents, setDependents] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Tax brackets for 2024 (monthly)
  const taxBrackets = [
    { max: 5000000, rate: 0.05, label: 'Bậc 1: Đến 5 triệu đồng' },
    { max: 10000000, rate: 0.10, label: 'Bậc 2: Trên 5 - 10 triệu đồng' },
    { max: 18000000, rate: 0.15, label: 'Bậc 3: Trên 10 - 18 triệu đồng' },
    { max: 32000000, rate: 0.20, label: 'Bậc 4: Trên 18 - 32 triệu đồng' },
    { max: 52000000, rate: 0.25, label: 'Bậc 5: Trên 32 - 52 triệu đồng' },
    { max: 80000000, rate: 0.30, label: 'Bậc 6: Trên 52 - 80 triệu đồng' },
    { max: Infinity, rate: 0.35, label: 'Bậc 7: Trên 80 triệu đồng' }
  ];

  // Calculate insurance contributions
  const calculateInsurance = (salary) => {
    const bhxh = salary * 0.08; // Social insurance (employee portion)
    const bhyt = salary * 0.015; // Health insurance (employee portion)
    const bhtn = salary * 0.01; // Unemployment insurance (employee portion)
    const total = bhxh + bhyt + bhtn;
    return { bhxh, bhyt, bhtn, total };
  };

  // Calculate deductions
  const calculateDeductions = (dependentsCount) => {
    const personalDeduction = 11000000; // 11 million VND per month
    const dependentDeduction = dependentsCount * 4400000; // 4.4 million per dependent
    return { personalDeduction, dependentDeduction, total: personalDeduction + dependentDeduction };
  };

  // Calculate progressive tax
  const calculateProgressiveTax = (taxableIncome) => {
    if (taxableIncome <= 0) return { totalTax: 0, breakdown: [] };

    let remainingIncome = taxableIncome;
    let totalTax = 0;
    const breakdown = [];
    let previousMax = 0;

    for (const bracket of taxBrackets) {
      if (remainingIncome <= 0) break;

      const bracketBase = previousMax;
      const bracketLimit = bracket.max - bracketBase;
      const taxableInBracket = Math.min(remainingIncome, bracketLimit);
      const taxInBracket = taxableInBracket * bracket.rate;

      if (taxableInBracket > 0) {
        breakdown.push({
          label: bracket.label,
          income: taxableInBracket,
          rate: bracket.rate,
          tax: taxInBracket
        });
        totalTax += taxInBracket;
      }

      remainingIncome -= taxableInBracket;
      previousMax = bracket.max;
    }

    return { totalTax, breakdown };
  };

  // Main calculation
  const insurance = calculateInsurance(grossSalary);
  const deductions = calculateDeductions(dependents);
  const taxableIncome = grossSalary - insurance.total - deductions.total;
  const tax = calculateProgressiveTax(taxableIncome);
  const netSalary = grossSalary - insurance.total - tax.totalTax;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  };

  const formatPercent = (rate) => {
    return `${(rate * 100).toFixed(1)}%`;
  };

  return (
    <div className={styles.salaryTaxCalculator}>
      <div className={styles.calculatorHeader}>
        <h4>Tính thuế thu nhập cá nhân</h4>
        <p>Điều chỉnh các giá trị để xem thuế và thu nhập thực nhận của bạn</p>
      </div>

      <div className={styles.calculatorInputs}>
        <div className={styles.inputGroup}>
          <label htmlFor="grossSalary">
            Lương tổng (gross): <strong>{formatCurrency(grossSalary)}</strong>
          </label>
          <input
            id="grossSalary"
            type="range"
            min="5000000"
            max="50000000"
            step="100000"
            value={grossSalary}
            onChange={(e) => setGrossSalary(Number(e.target.value))}
            className={styles.salarySlider}
          />
          <div className={styles.sliderMarks}>
            <span>5 triệu</span>
            <span>50 triệu</span>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="dependents">
            Số người phụ thuộc: <strong>{dependents}</strong>
          </label>
          <input
            id="dependents"
            type="range"
            min="0"
            max="5"
            step="1"
            value={dependents}
            onChange={(e) => setDependents(Number(e.target.value))}
            className={styles.salarySlider}
          />
          <div className={styles.sliderMarks}>
            <span>0</span>
            <span>5</span>
          </div>
        </div>
      </div>

      <div className={styles.calculatorResults}>
        <div className={styles.resultCard}>
          <div className={styles.resultLabel}>Lương tổng</div>
          <div className={styles.resultValue}>{formatCurrency(grossSalary)}</div>
        </div>

        <div className={styles.resultCard + ' ' + styles.resultDeduction}>
          <div className={styles.resultLabel}>Bảo hiểm bắt buộc</div>
          <div className={styles.resultValue}>-{formatCurrency(insurance.total)}</div>
          {showDetails && (
            <div className={styles.resultDetails}>
              <div>• BHXH (8%): {formatCurrency(insurance.bhxh)}</div>
              <div>• BHYT (1.5%): {formatCurrency(insurance.bhyt)}</div>
              <div>• BHTN (1%): {formatCurrency(insurance.bhtn)}</div>
            </div>
          )}
        </div>

        <div className={styles.resultCard + ' ' + styles.resultDeduction}>
          <div className={styles.resultLabel}>Giảm trừ gia cảnh</div>
          <div className={styles.resultValue}>-{formatCurrency(deductions.total)}</div>
          {showDetails && (
            <div className={styles.resultDetails}>
              <div>• Bản thân: {formatCurrency(deductions.personalDeduction)}</div>
              {dependents > 0 && (
                <div>• Người phụ thuộc ({dependents}): {formatCurrency(deductions.dependentDeduction)}</div>
              )}
            </div>
          )}
        </div>

        <div className={styles.resultCard + ' ' + styles.resultTaxable}>
          <div className={styles.resultLabel}>Thu nhập tính thuế</div>
          <div className={styles.resultValue}>{formatCurrency(Math.max(0, taxableIncome))}</div>
        </div>

        <div className={styles.resultCard + ' ' + styles.resultTax}>
          <div className={styles.resultLabel}>Thuế TNCN</div>
          <div className={styles.resultValue}>-{formatCurrency(tax.totalTax)}</div>
          {showDetails && tax.breakdown.length > 0 && (
            <div className={styles.resultDetails}>
              {tax.breakdown.map((bracket, idx) => (
                <div key={idx}>
                  • {bracket.label}: {formatCurrency(bracket.income)} × {formatPercent(bracket.rate)} = {formatCurrency(bracket.tax)}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.resultCard + ' ' + styles.resultNet}>
          <div className={styles.resultLabel}>Thu nhập thực nhận</div>
          <div className={styles.resultValue}>{formatCurrency(netSalary)}</div>
          <div className={styles.resultPercent}>
            {((netSalary / grossSalary) * 100).toFixed(1)}% của lương tổng
          </div>
        </div>
      </div>

      <div className={styles.calculatorActions}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={styles.detailsButton}
        >
          {showDetails ? '▲ Ẩn chi tiết' : '▼ Xem chi tiết tính toán'}
        </button>
      </div>

      <div className={styles.calculatorNote}>
        <p>
          <strong>Lưu ý:</strong> Đây là tính toán đơn giản hóa cho mục đích minh họa.
          Thuế thực tế có thể thay đổi tùy thuộc vào các khoản giảm trừ khác, đóng góp tự nguyện,
          và quy định cụ thể của công ty.
        </p>
      </div>
    </div>
  );
}

/**
 * SimpleSalaryComparison Component
 * Quick interactive comparison showing before and after tax
 */
export function SimpleSalaryComparison({
  defaultGrossSalary = 13000000,
  interactive = true,
  dependents = 0
}) {
  const [grossSalary, setGrossSalary] = useState(defaultGrossSalary);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  // Calculate deductions (simplified for quick comparison)
  const calculateQuickDeductions = (salary) => {
    // Insurance: 10.5% total
    const insurance = salary * 0.105;

    // Deductions
    const personalDeduction = 11000000;
    const dependentDeduction = dependents * 4400000;

    // Taxable income
    const taxableIncome = Math.max(0, salary - insurance - personalDeduction - dependentDeduction);

    // Progressive tax calculation
    let tax = 0;
    let remaining = taxableIncome;
    const brackets = [
      { limit: 5000000, rate: 0.05 },
      { limit: 5000000, rate: 0.10 },
      { limit: 8000000, rate: 0.15 },
      { limit: 14000000, rate: 0.20 },
      { limit: 20000000, rate: 0.25 },
      { limit: 28000000, rate: 0.30 },
      { limit: Infinity, rate: 0.35 }
    ];

    for (const bracket of brackets) {
      if (remaining <= 0) break;
      const taxableInBracket = Math.min(remaining, bracket.limit);
      tax += taxableInBracket * bracket.rate;
      remaining -= taxableInBracket;
    }

    return {
      insurance,
      tax,
      total: insurance + tax
    };
  };

  const deductions = calculateQuickDeductions(grossSalary);
  const netSalary = grossSalary - deductions.total;
  const percentage = ((deductions.total / grossSalary) * 100).toFixed(1);

  return (
    <div className={styles.simpleSalaryComparison}>
      {interactive && (
        <div className={styles.comparisonSliderSection}>
          <label htmlFor="salary-slider" className={styles.sliderLabel}>
            Điều chỉnh lương để xem thay đổi:
          </label>
          <input
            id="salary-slider"
            type="range"
            min="5000000"
            max="50000000"
            step="100000"
            value={grossSalary}
            onChange={(e) => setGrossSalary(Number(e.target.value))}
            className={styles.comparisonSlider}
          />
          <div className={styles.sliderMarks}>
            <span>5 triệu</span>
            <span>50 triệu</span>
          </div>
        </div>
      )}

      <div className={styles.comparisonRow}>
        <div className={styles.comparisonItem}>
          <span className={styles.comparisonLabel}>Lương tổng:</span>
          <span className={styles.comparisonValue}>{formatCurrency(grossSalary)} đồng</span>
        </div>
        <div className={styles.comparisonArrow}>→</div>
        <div className={styles.comparisonItem}>
          <span className={styles.comparisonLabel}>Thực nhận:</span>
          <span className={styles.comparisonValue + ' ' + styles.highlightNet}>{formatCurrency(Math.round(netSalary))} đồng</span>
        </div>
      </div>

      <div className={styles.comparisonDeduction}>
        <span className={styles.deductionAmount}>-{formatCurrency(Math.round(deductions.total))} đồng</span>
        <span className={styles.deductionPercent}>({percentage}%)</span>
        <span className={styles.deductionLabel}>đã bị khấu trừ cho thuế và bảo hiểm</span>
      </div>

      {interactive && (
        <div className={styles.comparisonBreakdown}>
          <div className={styles.breakdownItem}>
            <span className={styles.breakdownLabel}>Bảo hiểm (10.5%):</span>
            <span className={styles.breakdownValue}>-{formatCurrency(Math.round(deductions.insurance))} đ</span>
          </div>
          <div className={styles.breakdownItem}>
            <span className={styles.breakdownLabel}>Thuế TNCN:</span>
            <span className={styles.breakdownValue}>-{formatCurrency(Math.round(deductions.tax))} đ</span>
          </div>
        </div>
      )}
    </div>
  );
}
