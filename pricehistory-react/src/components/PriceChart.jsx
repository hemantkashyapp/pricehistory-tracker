import { useEffect, useRef } from "react";
function PriceChart({ history }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    function draw() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      if (!history || history.length < 2) {
        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Not enough recorded prices yet.", width / 2, height / 2);
        return;
      }

      const padding = { top: 25, right: 25, bottom: 45, left: 65 };
      const prices = history.map((item) => Number(item.price));
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      const range = max - min || 1;

      const x = (index) =>
        padding.left + (index / (history.length - 1)) * (width - padding.left - padding.right);

      const y = (price) =>
        padding.top + ((max - price) / range) * (height - padding.top - padding.bottom);

      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const lineY = padding.top + (i / 4) * (height - padding.top - padding.bottom);
        ctx.beginPath();
        ctx.moveTo(padding.left, lineY);
        ctx.lineTo(width - padding.right, lineY);
        ctx.stroke();

        const priceLabel = Math.round(max - (i / 4) * range);
        ctx.fillStyle = "#64748b";
        ctx.font = "11px Arial";
        ctx.textAlign = "right";
        ctx.fillText(`₹${priceLabel.toLocaleString("en-IN")}`, padding.left - 8, lineY + 4);
      }

      ctx.beginPath();
      history.forEach((item, index) => {
        const pointX = x(index);
        const pointY = y(Number(item.price));
        if (index === 0) ctx.moveTo(pointX, pointY);
        else ctx.lineTo(pointX, pointY);
      });
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.stroke();

      history.forEach((item, index) => {
        const pointX = x(index);
        const pointY = y(Number(item.price));

        ctx.beginPath();
        ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#64748b";
        ctx.font = "11px Arial";
        ctx.textAlign = "center";
        ctx.fillText(
          new Date(item.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
          pointX,
          height - 20
        );
      });
    }

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [history]);

  return (
    <div className="chart-wrapper">
      <canvas ref={canvasRef} id="priceChart" />
    </div>
  );
}

export default PriceChart;
