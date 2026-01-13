function New() {

  return (
    <>
      <div className="border border-white/100  p-10">
        <h1 className="text-center text-2xl font-bold text-white">New Form</h1>
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-6">
          <div className="col-span-3">
            <label htmlFor="name" className="block font-semibold text-amber-50">Name</label>
            <input id="name"></input>
          </div>
          <div className="col-span-6">
            <label htmlFor="des" className="block font-semibold text-amber-50">Des</label>
            <input id="des" className="outline-1  rounded-md focus:"></input>
          </div>


        </div>
      </div>


    </>
  )

}
export default New;