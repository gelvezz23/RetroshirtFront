
const Brand = ({ ...props }) => (
    <img
        src="/img/retro-shirt.jpg"
        alt="Retro Shirt logo"
        {...props}
        width={50}
        height={100}
        priority
    />
)
export default Brand