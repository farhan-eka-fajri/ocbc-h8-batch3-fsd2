//keuntungannya 
// 1. kita gk perlu set style yang sama di beberapa komponen yang berbeda
// 2. kita bisa destruct dari satu variable ke dalam variable baru untuk menggunakan style yang sejenis

// kekurangan
// 1. gk punya fitur auto complete dan akan dianggap sebagai onject biasa



const cardStyle = {
    borderRadius: "15px",
    backgroudColor: "white",
    boxShadow: "4px 4px 4px #111", 
    color: "black"}

const largerCardStyle = {
    ...cardStyle, //spread operator/destrukturisasi
    borderRadius: "20px",
    fontSize: "125%"
}



// sintaks dalam css dengan style di react ada perbedaan
// 1. css pake snake-case, react pake camelCase

const CardObjectVariableStyle = () => {
    return(
        <>
        <div style={{cardStyle}}>
            <h2> ini adalah judul</h2>
            <p> ini adalah konten sederhana  dari object Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat aperiam vitae sapiente at? Fugit amet modi, maxime cum itaque laudantium obcaecati possimus quidem autem expedita eligendi officiis! Sequi, cupiditate!</p>
        </div>

        <div style={{largerCardStyle}}>
            <h2> ini adalah judul</h2>
            <p> ini adalah konten sederhana Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat aperiam vitae sapiente at? Fugit amet modi, maxime cum itaque laudantium obcaecati possimus quidem autem expedita eligendi officiis! Sequi, cupiditate!</p>
        </div>
        </>
    )
}

export default CardObjectVariableStyle;