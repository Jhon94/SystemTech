import React, { useState, useEffect } from 'react'
import '../../styles/panelAdministrador/gestorAdministrador.css'
import Header from '../Header'
import { MenuAdmin } from './MenuAdmin'
import FlechaArriba from '../../assets/gestorAdministrador/FlechaArriba.png'
import Swal from 'sweetalert2'

export const GestorAdministrador = () => {
  const [showModal, setShowModal] = useState(false)
  const [servicios, setServicios] = useState([])
  const [nuevoServicio, setNuevoServicio] = useState({
    id: null,
    img: "",
    name: "",
    categoria: "",
    price: ""
  })

  //Estado de paginación
  const [paginaActual, setPaginaActual] = useState(1)
  const itemsPorPagina = 3

  //Cargar data desde localStorage o JSON
  useEffect(() => {
    const dataGuardada = localStorage.getItem("servicios")

    if (dataGuardada && JSON.parse(dataGuardada).length > 0) {
      setServicios(JSON.parse(dataGuardada))
    } else {
      fetch("/data/servicios.json")
        .then(res => {
          if (!res.ok) throw new Error("No se pudo cargar JSON")
          return res.json()
        })
        .then(data => {
          setServicios(data)
          localStorage.setItem("servicios", JSON.stringify(data))
        })
        .catch(err => console.error("❌ Error cargando JSON:", err))
    }
  }, [])

  //Guardar en localStorage cada vez que cambien los servicios
  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios))
  }, [servicios])

  //Manejo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoServicio({ ...nuevoServicio, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = Date.now()
    setServicios([...servicios, { ...nuevoServicio, id }])
    setNuevoServicio({ id: null, img: "", name: "", categoria: "", price: "" })
    setShowModal(false)
  }

  //Eliminar servicio con confirmación
  const eliminarServicio = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setServicios(servicios.filter(s => s.id !== id))

        // ✅ Toast de éxito
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Servicio eliminado correctamente",
          showConfirmButton: false,
          timer: 2000
        })
      } else {
        // ❌ Toast de cancelación
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Proceso cancelado",
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }

  // Acción temporal para editar
  const editarServicio = () => {
    Swal.fire({
      icon: "info",
      title: "Acción no disponible",
      text: "La edición de servicios estará disponible próximamente",
      confirmButtonText: "Entendido"
    })
  }



  //Calcular items por página
  const indexUltimo = paginaActual * itemsPorPagina
  const indexPrimero = indexUltimo - itemsPorPagina
  const serviciosPagina = servicios.slice(indexPrimero, indexUltimo)
  const totalPaginas = Math.ceil(servicios.length / itemsPorPagina)

  //Cambiar página
  const irAPagina = (numero) => {
    setPaginaActual(numero)
  }

  return (
    <>
      <Header />

      <div className='containerServicios'>
        <div className='panelAdmin'>
          <MenuAdmin />

          <div className='infoServicios'>
            <div className='headerInfoServicios'>
              <h2>Panel Administrativo</h2>
              <button
                className='btnAddServicios'
                onClick={() => setShowModal(true)}
              >
                + Agregar Nuevo Servicio
              </button>
            </div>

            <div className='containerSearch'>
              <input className='inputSearch' type="search" placeholder='Buscar por nombre o ID...' />
              <div className='containerSelects'>
                <select className='selectSearch1'>
                  <option value="ciberseguridad">Filtrar por categoría</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                  <option value="desarrollo">Desarrollo</option>
                </select>
                <select className='selectSearch2'>
                  <option value="ordenar">Ordenar por</option>
                  <option value="a-z">A...Z</option>
                  <option value="z-a">Z...A</option>
                </select>
              </div>
            </div>

            {/* 🔹 Tabla */}
            <div className='containerServicios'>
              <table>
                <thead>
                  <tr>
                    <th>IMAGEN</th>
                    <th>NOMBRE DEL SERVICIO</th>
                    <th>CATEGORÍA</th>
                    <th>PRECIO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {serviciosPagina.map((s) => (
                    <tr key={s.id}>
                      <td>
                        {s.img ? (
                          <img src={s.img} alt={s.name} width="50" />
                        ) : (
                          "No Img"
                        )}
                      </td>
                      <td>{s.name}</td>
                      <td>{s.category}</td>
                      <td>${s.price}</td>
                      <td>
                        <div className='containerBtnEditar'>
                          <button className='btnEditar' onClick={editarServicio}>Editar</button>
                        </div>
                        <div className='containerBtnEliminar'>
                          <button
                            className='btnEliminar'
                            onClick={() => eliminarServicio(s.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 🔹 Paginación DEBAJO de la tabla */}
            <div className="pagination">
              <button
                onClick={() => irAPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
              >
                «
              </button>

              {[...Array(totalPaginas)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => irAPagina(i + 1)}
                  className={paginaActual === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => irAPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Modal */}
      {showModal && (
        <div className="modal">
          <div className="modalContainer">
            <button
              className="closeModal"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2>Nuevo Servicio</h2>

            <form className="formNuevoServicio" onSubmit={handleSubmit}>
              <div className='containerModalForm'>
                <div className='containerForm'>
                  <label>Nombre del Servicio</label>
                  <input
                    type="text"
                    name="name"
                    value={nuevoServicio.name}
                    onChange={handleChange}
                    placeholder="Ingrese nombre del servicio"
                    required
                  />

                  <label>Seleccionar Categoría</label>
                  <select
                    name="categoria"
                    value={nuevoServicio.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Categoría</option>
                    <option value="ciberseguridad">Ciberseguridad</option>
                    <option value="desarrollo">Desarrollo</option>
                  </select>

                  <label>Precio</label>
                  <input
                    type="number"
                    name="price"
                    value={nuevoServicio.price}
                    onChange={handleChange}
                    placeholder="Ingrese el valor del servicio"
                    required
                  />
                </div>

                <div className='contentUpImg'>
                  <label>Insertar Imagen</label>
                  <button
                    type="button"
                    className="uploadBox"
                    onClick={() => alert("Aquí iría la subida de imagen")}
                  >
                    <img src={FlechaArriba} alt="" />
                  </button>
                </div>
              </div>

              <button type="submit" className="btnAgregarServicio">
                Agregar Servicio
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
