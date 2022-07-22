import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import Button from '../components/Button'

const Inicio = () => {

  return (
    <main>
      <section>
        <div className='md:bg-[url(/hospital-ward.jpg)] md:w-full md:h-screen flex items-center justify-center md:bg-cover md:bg-center'>
          <div className='md:w-1/2 mt-5 md:mt-0'>
            <h2 className='font-bold text-darkShades md:text-backGround text-lg md:text-4xl text-center'>
              Especialistas en diseño y construcción de espacios para la salud
            </h2>
            <p className='text-center mt-2 text-base md:text-lg text-lightShades'>
              Atendemos proyectos en toda la República Mexicana desde hospitales, clínicas, consultorios, quirófanos, farmacéuticas, etc.
            </p>
          </div>
        </div>
        <div className='md:my-20'>
          <Title>
            <Link to={'/nosotros'}>Conocenos</Link>
          </Title>
            <p className='text-center mx-3 px-3 my-3 text-darkShades'>
              En IM Infraestructura Médica diseñamos y  construimos espacios para la salud. Atendemos proyectos en toda la República Mexicana desde hospitales, clínicas, consultorios, quirófanos, farmacéuticas, etc.
              Nuestros proyectos se caracterizan por cumplir con los lineamientos, normas de calidad y funcionalidad para la entera satisfacción del médico y paciente.
            </p>
        </div>
        <div className='md:grid grid-cols-2 gap-4 my-20'>
          <div>
            <Title>
              Nuestras Ventajas
            </Title>
              <p className='m-5 text-sm'>Somos un equipo multidisciplinario, conformado por especialistas en diseño, construcción, administración, contabilidad y finanzas.</p>
              <p className='m-5 text-sm'>Más de 43 proyectos se han logrado con éxito gracias a que conocemos el proceso completo para llevarlos a la realidad.</p>
              <p className='m-5 text-sm'>Tenemos la experiencia necesaria para presentar proyectos ante dependencias obligatorias como: COFEPRIS, alcaldías, CFE, sindicatos, entre otras.</p>        
          </div>
          <div>
            <Title>
              Testimoniales
            </Title>
            <p className='m-5 text-sm'>En IM Infraestructura Médica realizamos Proyectos llave en mano que mejoran la experiencia de nuestros clientes y más importante la de sus pacientes. ¡Innovamos los espacios para la salud!</p>
            <div className='text-center'>
              <Link to={'/contacto'}>
                <Button>
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='md:grid grid-cols-2 gap-4 my-20 bg-lightAccent py-16'>
          <div>
            <Title>
              Construcción de hospitales, clínicas y consultorios
            </Title>
            <p className='m-5 text-sm leading-7'>
              En IM Infraestructura Médica sabemos que la construcción para el ramo medico se debe realizar bajo estrictos estándares de calidad y normatividad. Los sitios designados para el cuidado de la salud de las personas requieren de una construcción adecuada y específica, ya que, aunque convergen en un mismo lugar deben contar con características físicas y acabados especiales.
            </p>
            <div className='text-center'>
              <Link to={'/servicios'}>
                  <Button>
                    ver Servicio
                  </Button>
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="/hospital.jpg" 
              alt="imagen hospital" 
              className='p-10'
            />
          </div>
        </div>
        <div>
          <Title>
            <Link to={'/proyectos'}>
              Proyectos
            </Link>
          </Title>
          <div className='md:grid grid-cols-3 gap-4 text-center my-10 p-10 text-2xl bg-darkShades text-backGround font-bold'>
            <div className='mt4'>
              <h3 className='mb-10'>Diseño</h3>
              <h3 className='mb-10'>Laboratorios</h3>
            </div>
            <div className='mt4'>
              <h3 className='mb-10'>Quirófanos</h3>
              <h3 className='mb-10'>Farmacéuticas</h3>
            </div>
            <div className='mt4'>
              <h3 className='mb-10'>Hospitales</h3>
              <h3 className='mb-10'>Clínicas Dentales</h3>
            </div>
            <div className='col-start-2'>
              <Link to={'/proyectos'}>
                <Button>
                  Proyectos
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <Title>
            Principales Normas que aplicamos
          </Title>
          <div className='md:grid grid-cols-2 gap-4 px-3 mb-10 text-center'>
            <div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-016-ssa3-2012:
                </h3>
                <p>
                  Establece los requisitos mínimos de infraestructura y equipamiento de hospitales y consultorios de atención médica especializada.
                </p>
              </div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-005-ssa3-2018:
                </h3>
                <p>
                  Establece los requisitos mínimos de infraestructura y equipamiento de establecimientos para la atención médica de pacientes ambulatorios.
                </p>
              </div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-005-stps-2017:
                </h3>
                <p>
                  Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.
                </p>
              </div>
            </div>
            <div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-003-segob-2011:
                </h3>
                <p>
                  Señales y avisos para protección civil.- Colores, formas y símbolos a utilizar.​
                </p>
              </div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-002-stps-2010:
                </h3>
                <p>
                  Condiciones de seguridad-prevención y protección contra incendios en los centros de trabajo.
                </p>
              </div>
              <div className='my-20'>
                <h3 className='text-2xl font-bold text-lightAccent'>
                  nom-030-ssa3-2013:
                </h3>
                <p>
                  Que establece las características arquitectónicas para facilitar el acceso, tránsito, uso y permanencia de las personas con discapacidad en establecimientos para la atención médica ambulatoria y hospitalaria del Sistema Nacional de Salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Inicio