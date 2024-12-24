import { useEffect } from "react";

const CreaVivienda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen w-screen">
      <iframe
        id="JotFormIFrame-243572654422053"
        title="Formulario"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/243572654422053"
        frameBorder="0"
        className="w-full h-full border-none"
        scrolling="no"
      />
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" async />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.jotformEmbedHandler("iframe[id='JotFormIFrame-243572654422053']", "https://form.jotform.com/")
          `,
        }}
      />
    </div>
  );
};

export default CreaVivienda;