'use client';

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-8 md:p-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-blue-500/20 pb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  Términos y Condiciones
                </span>
              </h1>
              <p className="text-slate-400">
                Última actualización: 4 de marzo de 2026
              </p>
            </div>

            {/* Intro */}
            <section className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                <strong>BackupTecno</strong>, empresa registrada en la República Argentina en Barrio Sarmiento, Córdoba (5000), opera el sitio web{' '}
                <a href="https://backup-tecno.vercel.app" className="text-sky-400 hover:text-sky-300 transition" rel="noopener noreferrer" target="_blank">
                  backup-tecno.vercel.app
                </a>
                {' '}Por favor, lee atentamente estos términos y condiciones antes de utilizar nuestros servicios. Al acceder y utilizar este sitio web y nuestros servicios, aceptas estar vinculado por estos términos.
              </p>
            </section>
          
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">1. Aceptación de Términos</h2>
              <p className="text-slate-300 leading-relaxed">
                Al utilizar BackupTecno, aceptas cumplir con estos términos y condiciones, así como con todas las leyes y regulaciones aplicables. Los servicios están destinados para usuarios mayores de 18 años. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">2. Descripción del Servicio</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                BackupTecno ofrece servicios integrales de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Desarrollo web y aplicaciones web</li>
                <li>Diseño de interfaces de usuario (UI/UX)</li>
                <li>Soluciones digitales personalizadas</li>
                <li>Consultoría técnica y estratégica</li>
                <li>Soporte y mantenimiento especializado</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                Nuestros servicios están disponibles tanto para individuos como para empresas y emprendedores.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">3. Derechos de Propiedad Intelectual</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                Todos los contenidos, códigos fuente, diseños, gráficos, texto, imágenes y materiales del sitio son propiedad exclusiva de BackupTecno o están debidamente licenciados. Estos elementos están protegidos por leyes de derechos de autor y acordos internacionales.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                <strong>Licencia de Uso:</strong> Los clientes reciben una licencia no exclusiva, no transferible y revocable para utilizar los productos finales entregados únicamente para fines comerciales o personales internos. Está expresamente prohibido:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Revender el código fuente o productos desarrollados</li>
                <li>Redistribuir los desarrollos como propios sin autorización</li>
                <li>Copiar, reproducir o modificar el contenido sin permiso</li>
                <li>Vender licencias o sublicencias de los productos</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">4. Representaciones del Usuario</h2>
              <p className="text-slate-300 leading-relaxed">
                Al utilizar nuestros servicios, representes y garantizas que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Tienes capacidad legal para aceptar estos términos</li>
                <li>No eres menor de edad en tu jurisdicción</li>
                <li>No utilizarás los servicios de forma automatizada o fraudulenta</li>
                <li>No usarás BackupTecno para propósitos ilegales o no autorizados</li>
                <li>Tu uso cumple con todas las leyes y regulaciones aplicables</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">5. Pagos y Facturación</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                Aceptamos los siguientes métodos de pago:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2 mb-3">
                <li>PayPal</li>
                <li>Transferencia bancaria</li>
                <li>Mastercard</li>
                <li>Visa</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                El cliente debe proporcionar información de pago precisa y actual. Todos los pagos se realizan en dólares estadounidenses. BackupTecno se autoriza automáticamente a cobrar los honorarios acordados en el contrato de proyecto.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">6. Política de Reembolsos</h2>
              <p className="text-slate-300 leading-relaxed">
                Todas las ventas y servicios son finales. No se emitirán reembolsos una vez que el servicio ha sido completado según las especificaciones acordadas en el contrato del proyecto. Los proyectos en progreso pueden estar sujetos a términos específicos del contrato.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">7. Actividades Prohibidas</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                No permitimos actividades que incluyan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Hackeo, scraping automático de datos o acceso no autorizado</li>
                <li>Redistribución no autorizada de nuestro código o desarrollos</li>
                <li>Intentos de eludir medidas de seguridad</li>
                <li>Uso para propósitos ilegales o fraudulentos</li>
                <li>Ataques a la infraestructura o sistemas del sitio</li>
                <li>Ingeniería inversa (reverse engineering) del software</li>
                <li>Recopilación automática o extracción masiva de datos</li>
                <li>Crear múltiples cuentas fraudulentas</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">8. Seguridad y Confidencialidad</h2>
              <p className="text-slate-300 leading-relaxed">
                BackupTecno implementa medidas de seguridad estándar de la industria para proteger la información del cliente. Sin embargo, no garantizamos seguridad absoluta. El cliente es responsable de mantener la confidencialidad de sus credenciales y contraseñas.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">9. Limitación de Responsabilidad</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>BackupTecno no será responsable por daños indirectos, incidentales, especiales o consecuentes</li>
                <li>Nuestra responsabilidad total se limita al monto pagado por el cliente en los 12 meses anteriores</li>
                <li>El servicio se proporciona "tal como está" sin garantías adicionales más allá de lo codificado en el contrato</li>
                <li>No somos responsables por pérdida de datos o interrupciones de servicio fuera de nuestro control</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">10. Privacidad y Datos Personales</h2>
              <p className="text-slate-300 leading-relaxed">
                El procesamiento de datos personales se realiza de acuerdo con nuestra Política de Privacidad. Los datos se procesan en Argentina conforme a la legislación aplicable. Al continuar usando nuestros servicios, consenties al procesamiento de tus datos en Argentina.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">11. Terminación de Servicios</h2>
              <p className="text-slate-300 leading-relaxed">
                BackupTecno se reserva el derecho de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                <li>Rescindir servicios si el cliente viola estos términos</li>
                <li>Denegar acceso si hay incumplimiento económico</li>
                <li>Terminar relación comercial por actividades ilícitas</li>
                <li>Aplicar acciones legales civiles o criminales si es necesario</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-3">
                La terminación es generalmente efectiva inmediatamente.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">12. Modificaciones de Servicios</h2>
              <p className="text-slate-300 leading-relaxed">
                BackupTecno se reserva el derecho de modificar, suspender o discontinuar servicios en cualquier momento sin previo aviso. No seremos responsables por pérdidas o inconvenientes causados por estas modificaciones.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">13. Indemnización</h2>
              <p className="text-slate-300 leading-relaxed">
                Aceptas defender, indemnizar y eximir a BackupTecno de cualquier reclamación, daño o responsabilidad (incluyendo honorarios de abogados) que surja de tu uso de los servicios, incumplimiento de estos términos, o violación de derechos de terceros.
              </p>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">14. Ley Aplicable y Jurisdicción</h2>
              <p className="text-slate-300 leading-relaxed">
                Estos términos se rigen por las leyes de la República Argentina. Las partes consienten irrevocablemente en la jurisdicción exclusiva de los tribunales competentes de Córdoba, Argentina para resolver cualquier disputa.
              </p>
            </section>

            {/* Section 15 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">15. Resolución de Disputas</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Negociación Informal</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Las partes acuerdan intentar resolver cualquier disputa mediante negociación informal durante 30 días antes de iniciar arbitraje.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Arbitraje Vinculante</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Cualquier disputa se someterá a la Corte de Arbitraje Comercial Internacional bajo las reglas de la Cámara Arbitral Europea. El arbitraje se llevará a cabo en Córdoba, Argentina, en idioma español, bajo la ley substantiva argentina.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 16 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">16. Disposiciones Generales</h2>
              <p className="text-slate-300 leading-relaxed">
                Estos términos constituyen el acuerdo completo entre tú y BackupTecno. Si cualquier disposición se considera inválida, las disposiciones restantes permanecen en vigor. Podemos asignar nuestros derechos a terceros. No tienes derecho a asignar estos términos sin nuestro consentimiento.
              </p>
            </section>

            {/* Section 17 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">17. Contacto</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Para consultas sobre estos términos o para reportar violaciones, puedes contactarnos en:
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded p-6 space-y-3">
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Email:</p>
                  <a
                    href="mailto:backup.tecno9@gmail.com"
                    className="text-sky-400 hover:text-sky-300 transition"
                  >
                    backup.tecno9@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-200 font-semibold mb-1">WhatsApp/Teléfono:</p>
                  <a
                    href="https://wa.me/543512644334"
                    className="text-sky-400 hover:text-sky-300 transition"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +54 9 351 2644334
                  </a>
                </div>
                <div>
                  <p className="text-slate-200 font-semibold mb-1">Ubicación:</p>
                  <p className="text-slate-300">
                    Barrio Sarmiento, Córdoba, Argentina (5000)
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-blue-500/20 text-slate-400 text-sm space-y-2">
              <p>
                © {new Date().getFullYear()} BackupTecno. Todos los derechos reservados.
              </p>
              <p>
                Estos términos fueron generados en conformidad con regulaciones legales y pueden ser modificados en cualquier momento por BackupTecno con previo aviso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
