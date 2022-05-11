// External object variable css


//keuntungannya 
// 1. sama seperti object variable css, namum bedanya kita bisa terapkan style yg sama di beberapa komponen yang berbeda

// kekurangan
// 1. gk punya fitur auto complete dan akan dianggap sebagai onject biasa



import {cardStyle, largeCardStyle} from './Card.style.js'



// sintaks dalam css dengan style di react ada perbedaan
// 1. css pake snake-case, react pake camelCase

const CardExternalStyle = () => {
    return(
        <>
        <div style={{cardStyle}}>
            <h2> ini adalah judul</h2>
            <p> ini adalah konten sederhana  dari object Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat aperiam vitae sapiente at? Fugit amet modi, maxime cum itaque laudantium obcaecati possimus quidem autem expedita eligendi officiis! Sequi, cupiditate!</p>
        </div>

        <div style={{largeCardStyle}}>
            <h2> ini adalah judul</h2>
            <p> ini adalah konten sederhana Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat aperiam vitae sapiente at? Fugit amet modi, maxime cum itaque laudantium obcaecati possimus quidem autem expedita eligendi officiis! Sequi, cupiditate!</p>
        </div>
        </>
    )
}

export default CardExternalStyle;