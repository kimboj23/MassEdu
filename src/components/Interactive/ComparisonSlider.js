import React, { useState } from 'react';
import NumberSlider from './NumberSlider';
import { ThoughtBubble, ThoughtBubbleSequence, RevealBubble } from './index';
import Icon from '@site/src/components/Icon';
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
    <section
      className={styles.taxComparisonSlider}
      aria-label="So sánh gánh nặng thuế VAT"
    >
      <div className={styles.comparisonRow}>
        <div
          className={styles.comparisonColumn}
          role="group"
          aria-labelledby="comparison-label-1"
        >
          <h5 id="comparison-label-1">{label1}</h5>
          <NumberSlider
            value={purchaseAmount}
            onValueChange={handleSliderChange}
            min={10000}
            max={100000}
            step={1000}
            unit="đồng"
            ariaLabel={`Số tiền mua hàng của ${label1}`}
          />
          <div className={styles.comparisonStats} aria-live="polite">
            <p>Thuế VAT ({vatRate}%): <strong>{formatCurrency(taxAmount)} đồng</strong></p>
            <p>Tỷ lệ trên thu nhập tháng: <strong aria-label={`${(percentage1 * 100).toFixed(3)} phần trăm`}>{formatPercentage(percentage1)}</strong></p>
          </div>
        </div>

        <div className={styles.comparisonDivider} aria-hidden="true">vs</div>

        <div
          className={styles.comparisonColumn}
          role="group"
          aria-labelledby="comparison-label-2"
        >
          <h5 id="comparison-label-2">{label2}</h5>
          <NumberSlider
            value={purchaseAmount}
            onValueChange={handleSliderChange}
            min={10000}
            max={100000}
            step={1000}
            unit="đồng"
            ariaLabel={`Số tiền mua hàng của ${label2}`}
          />
          <div className={styles.comparisonStats} aria-live="polite">
            <p>Thuế VAT ({vatRate}%): <strong>{formatCurrency(taxAmount)} đồng</strong></p>
            <p>Tỷ lệ trên thu nhập tháng: <strong aria-label={`${(percentage2 * 100).toFixed(3)} phần trăm`}>{formatPercentage(percentage2)}</strong></p>
          </div>
        </div>
      </div>

      <div className={styles.comparisonInsight}>
        <div className={styles.vatRateSliderContainer}>
          <label htmlFor="vatRate" id="vatRate-label">Điều chỉnh thuế suất VAT: <strong>{vatRate}%</strong></label>
          <input
            type="range"
            id="vatRate"
            min="0"
            max="25"
            step="1"
            value={vatRate}
            onChange={handleVatChange}
            className={styles.vatRateSlider}
            aria-labelledby="vatRate-label"
            aria-valuemin={0}
            aria-valuemax={25}
            aria-valuenow={vatRate}
            aria-valuetext={`${vatRate} phần trăm`}
          />
        </div>
        <RevealBubble buttonText={<><Icon name="lightbulb" decorative size="small" /> Xem công thức tính</>}>
          <p>Thuế VAT được tính từ giá đã bao gồm thuế (giá bạn trả):</p>
          <code className={styles.formulaCode}>
            Thuế VAT = Giá bán / (1 + 100 / Tỷ lệ VAT)
          </code>
          <p>Ví dụ: <strong>{formatCurrency(taxAmount)}</strong> = {formatCurrency(purchaseAmount)} / (1 + 100 / {vatRate})</p>
        </RevealBubble>
        <ThoughtBubble variant="warning">
          <strong>Cùng số tiền thuế. Nhưng:</strong>
          <p style={{margin: '0.5rem 0 0 0'}}>
            → Người có thu nhập thấp chịu gánh nặng thuế <strong>nặng gấp {differenceFactor.toFixed(1)} lần</strong> (theo tỷ lệ thu nhập)!
          </p>
        </ThoughtBubble>

        <ThoughtBubble icon="balance" variant="question">
          <strong>Đây gọi là thuế gián thu (regressive tax)</strong> - mọi người đóng như nhau, nhưng ảnh hưởng không công bằng.
          <p style={{margin: '0.5rem 0 0 0'}}>
            Vậy có cách nào công bằng hơn không? Có - đó là **thuế trực tiếp** (như thuế thu nhập cá nhân), nơi người có thu nhập cao hơn sẽ đóng thuế với tỷ lệ cao hơn.
          </p>
        </ThoughtBubble>
      </div>
    </section>
  );
}