import React, { useState } from 'react';
import NumberSlider from './NumberSlider';
import { ThoughtBubble, ThoughtBubbleSequence, RevealBubble } from './index';
import styles from './interactive.module.css';

function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(value));
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(3)}%`;
}

export default function ComparisonSlider({
  label1,
  income1,
  label2,
  income2,
  initialPurchaseAmount = 25000,
}) {
  const [purchaseAmount, setPurchaseAmount] = useState(initialPurchaseAmount);
  const [vatRate, setVatRate] = useState(10);

  const taxAmount = purchaseAmount / (1 + 100 / vatRate);
  const percentage1 = taxAmount / income1;
  const percentage2 = taxAmount / income2;
  const differenceFactor = percentage2 > 0 ? percentage1 / percentage2 : 0;

  const handleSliderChange = (newValue) => {
    setPurchaseAmount(newValue);
  };

  const handleVatChange = (e) => {
    setVatRate(Number(e.target.value));
  };

  return (
    <div className={styles.comparisonSlider}>
      <div className={styles.comparisonColumn}>
        <h5>{label1}</h5>
        <NumberSlider
          value={purchaseAmount}
          onValueChange={handleSliderChange}
          min={10000}
          max={100000}
          step={1000}
          unit="đồng"
        />
        <div className={styles.comparisonStats}>
          <p>Thuế VAT ({vatRate}%): <strong>{formatCurrency(taxAmount)} đồng</strong></p>
          <p>Tỷ lệ trên thu nhập tháng: <strong>{formatPercentage(percentage1)}</strong></p>
        </div>
      </div>

      <div className={styles.comparisonDivider}>vs</div>

      <div className={styles.comparisonColumn}>
        <h5>{label2}</h5>
        <NumberSlider
          value={purchaseAmount}
          onValueChange={handleSliderChange}
          min={10000}
          max={100000}
          step={1000}
          unit="đồng"
        />
        <div className={styles.comparisonStats}>
          <p>Thuế VAT ({vatRate}%): <strong>{formatCurrency(taxAmount)} đồng</strong></p>
          <p>Tỷ lệ trên thu nhập tháng: <strong>{formatPercentage(percentage2)}</strong></p>
        </div>
      </div>

      <div className={styles.comparisonInsight}>
        <div className={styles.vatRateSliderContainer}>
          <label htmlFor="vatRate">Điều chỉnh thuế suất VAT: <strong>{vatRate}%</strong></label>
          <input
            type="range"
            id="vatRate"
            min="0"
            max="25"
            step="1"
            value={vatRate}
            onChange={handleVatChange}
            className={styles.vatRateSlider}
          />
        </div>
        <RevealBubble buttonText="💡 Xem công thức tính">
          <p>Thuế VAT được tính từ giá đã bao gồm thuế (giá bạn trả):</p>
          <code className={styles.formulaCode}>
            Thuế VAT = Giá bán / (1 + 100 / Tỷ lệ VAT)
          </code>
          <p>Ví dụ: <strong>{formatCurrency(taxAmount)}</strong> = {formatCurrency(purchaseAmount)} / (1 + 100 / {vatRate})</p>
        </RevealBubble>
        <ThoughtBubble icon="📊" variant="warning">
          <strong>Cùng số tiền thuế. Nhưng:</strong>
          <p style={{margin: '0.5rem 0 0 0'}}>
            → Người có thu nhập thấp chịu gánh nặng thuế <strong>nặng gấp {differenceFactor.toFixed(1)} lần</strong> (theo tỷ lệ thu nhập)!
          </p>
        </ThoughtBubble>

        <ThoughtBubble icon="⚖️" variant="question">
          <strong>Đây gọi là thuế gián thu (regressive tax)</strong> - mọi người đóng như nhau, nhưng ảnh hưởng không công bằng.
          <p style={{margin: '0.5rem 0 0 0'}}>
            Vậy có cách nào công bằng hơn không? Có - đó là **thuế trực tiếp** (như thuế thu nhập cá nhân), nơi người có thu nhập cao hơn sẽ đóng thuế với tỷ lệ cao hơn.
          </p>
        </ThoughtBubble>
      </div>
    </div>
  );
}