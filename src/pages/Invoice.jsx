import { useState, useEffect, useRef } from "react";

export default function Invoice() {
  const invoiceRef = useRef(null);

  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [services, setServices] = useState([{ name: "", amount: "" }]);

  // Load html2pdf via CDN (Vite safe)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const subtotal = services.reduce(
    (sum, s) => sum + (parseFloat(s.amount) || 0),
    0
  );

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const addService = () =>
    setServices([...services, { name: "", amount: "" }]);

  const removeService = (i) =>
    setServices(services.filter((_, idx) => idx !== i));

  const updateService = (i, field, value) => {
    const copy = [...services];
    copy[i][field] = value;
    setServices(copy);
  };

  const downloadPDF = () => {
    if (!window.html2pdf) return alert("PDF library still loading...");
    window.html2pdf().from(invoiceRef.current).save(`${invoiceNumber}.pdf`);
  };

  const shareWhatsApp = () => {
    const msg = `Invoice ${invoiceNumber}
Client: ${clientName || "Client"}
Total: ₹${total.toFixed(2)}

Suguru Weddings`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Client Phone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />

          {services.map((s, i) => (
            <div key={i} className="border p-3 mb-3 rounded">
              <input
                className="border p-2 w-full mb-2"
                placeholder="Service"
                value={s.name}
                onChange={(e) => updateService(i, "name", e.target.value)}
              />

              <input
                type="number"
                className="border p-2 w-full"
                placeholder="Amount"
                value={s.amount}
                onChange={(e) => updateService(i, "amount", e.target.value)}
              />

              {services.length > 1 && (
                <button
                  onClick={() => removeService(i)}
                  className="text-red-500 mt-2"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button onClick={addService} className="mb-4">
            ➕ Add Service
          </button>

          <button
            onClick={downloadPDF}
            className="block w-full bg-rose-600 text-white p-2 rounded mb-2"
          >
            Download PDF
          </button>

          <button
            onClick={shareWhatsApp}
            className="block w-full bg-green-500 text-white p-2 rounded"
          >
            Share WhatsApp
          </button>
        </div>

        {/* PREVIEW */}
        <div ref={invoiceRef} className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-2">Suguru Weddings</h2>

          <p>Invoice: {invoiceNumber}</p>
          <p>Client: {clientName}</p>
          <p>Phone: {clientPhone}</p>

          <hr className="my-3" />

          {services.map((s, i) => (
            <div key={i} className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span>₹{parseFloat(s.amount || 0).toFixed(2)}</span>
            </div>
          ))}

          <hr className="my-3" />

          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>GST (18%): ₹{gst.toFixed(2)}</p>

          <h3 className="font-bold mt-2">
            Total: ₹{total.toFixed(2)}
          </h3>
        </div>

      </div>
    </div>
  );
}
