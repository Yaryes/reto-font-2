import { Formulario } from "./Formulario"

export const Containner = () => {
  return (
    <div className="containner py-40 px-48">
      <div className="columns-2 bg-slate-100 rounded-[50px] p-10">
          <div>
            <Formulario></Formulario>
          </div>
          <div>
            <img src="/img/illustration-sign-up-desktop.svg" alt="imagen central" />
          </div>
      </div>
    </div>
  )
}
