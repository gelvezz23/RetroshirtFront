const ButtonFondo = ({titulo}) => {
    return (
      <div className="grid min-h-[50px] place-content-center p-4">
        <GradientShadowButton titulo={titulo} />
      </div>
    );
  };
  
  const GradientShadowButton = ({titulo}) => {
    return (
      <div className="group relative w-fit transition-transform duration-300 active:scale-95">
        <button className="relative z-10  bg-gradient-to-br bg-gray-partners  to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
          <span className="block  bg-blue-partners px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-purple-partners group-hover:text-slate-50 group-active:blue-partners">
            {titulo}
          </span>
        </button>
        <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br bg-purple-partners to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
      </div>
    );
  };
  
  export default ButtonFondo;