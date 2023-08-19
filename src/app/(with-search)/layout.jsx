import Filters from "src/components/filters/Filters"

const WithSearchLayout = ({ children }) => {
  return (
    <section>
      <Filters />
      {children}
    </section>
  )
}

export default WithSearchLayout;