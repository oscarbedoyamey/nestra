const SobreNosotros = () => {
  return (
    <div className="pt-20">
      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl font-light mb-12">El equipo</h1>
          <div className="space-y-8">
            <p className="text-xl font-light text-gray-600">
              En Nestra, estamos comprometidos con transformar el acceso a la vivienda, haciendo posible lo que antes parecía inalcanzable: hogares personalizados, asequibles, y sostenibles para todos.
            </p>
            <p className="text-gray-500">
              Nestra surge como spin-off de la promotora BM Confort, que durante tres décadas ha promovido cientos de viviendas residenciales, ganándose la confianza de miles de familias.
            </p>
            <p className="text-gray-500">
              Con un equipo con más de 30 años de experiencia en el desarrollo de proyectos inmobiliarios y creación de plataformas digitales, ofrecemos una solución única en el sector de la promoción inmobiliaria con un enfoque completamente innovador tanto en la forma de hacer como en el producto final.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl font-light mb-12">Por qué lo Hacemos</h1>
          <div className="space-y-8">
            <p className="text-xl font-light text-gray-600">
              Año tras año, el déficit de viviendas se agrava, dejando a miles de familias sin acceso a un hogar digno y asequible. La crisis de acceso a la vivienda es un problema creciente:
            </p>
            <ul className="space-y-4 text-gray-500 list-disc pl-6">
              <li>Más de 600,000 viviendas adicionales serán necesarias en los próximos años para satisfacer la demanda.</li>
              <li>Los precios se disparan por culpa de la falta de oferta, mientras las opciones personalizables y sostenibles son casi inexistentes.</li>
              <li>Impacto ambiental: La mayoría de los promotores construyen sin pensar en el alto costo para el planeta, tanto en recursos como en emisiones.</li>
            </ul>
            <p className="text-gray-500">
              En Nestra, creemos que la vivienda no debe ser un lujo, sino una necesidad al alcance de todos. Por eso, trabajamos para aliviar esta crisis, ofreciendo un modelo escalable y eficiente que combina innovación y experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-light mb-20">Nuestros pilares</h1>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="fade-in">
              <h2 className="text-2xl font-light mb-8">Justicia Social</h2>
              <div className="space-y-6">
                <p className="text-gray-500">
                  Nuestro objetivo es evitar cualquier especulación o sobrecoste innecesario, asegurando que el comprador pague el precio lo más asequible posible por su vivienda, aplicando así la máxima transparencia posible a todas las partes en todo el proceso.
                </p>
                <p className="text-gray-500">
                  Esta transparencia no solo fomenta relaciones de confianza, sino que también nos permite centrarnos en nuestra misión: ofrecer acceso a vivienda al más precio justo, sin comprometer la calidad ni la sostenibilidad, al mayor número de personas posible.
                </p>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-light mb-8">Justicia Medioambiental</h2>
              <div className="space-y-6">
                <p className="text-gray-500">
                  Más allá de garantizar un precio asequible, nos esforzamos por aplicar procesos y utilizar materiales innovadores que minimicen el impacto ambiental. Dentro de unos límites de coste razonables, optimizamos cada etapa de la construcción para reducir el consumo energético, las emisiones de CO₂ y el uso de recursos naturales.
                </p>
                <p className="text-gray-500">
                  Nuestro compromiso no termina con la construcción; diseñamos viviendas que, en su uso diario, sean sostenibles y eficientes, contribuyendo a un futuro más limpio y responsable. Así, no solo construimos viviendas para las personas, sino también para el planeta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;