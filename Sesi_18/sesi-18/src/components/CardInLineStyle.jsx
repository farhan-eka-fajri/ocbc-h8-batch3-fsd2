import CardInLineStyleModule from './CardInLineStyle.module.css'

const CardInLineStyle = () => {
    return(
        <>
        <div style={{borderRadius: "15px",backgroudColor: "white",boxShadow: "4px 4px 4px 4px #111", color: "black"}}>
            <h2 className={CardInLineStyleModule.center}> ini adalah judul</h2>
            <p> ini adalah konten sederhana Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat aperiam vitae sapiente at? Fugit amet modi, maxime cum itaque laudantium obcaecati possimus quidem autem expedita eligendi officiis! Sequi, cupiditate!</p>
        </div>
        </>
    )
}

export default CardInLineStyle;