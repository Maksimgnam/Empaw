const Catagories = ({ CategoryClick }) => {

    return (
        <div className="Catagories">
            <h3 className='CatagoriesText'><span className='blackSpan'>C</span>atagories</h3>
            <div className="CatagoriesContainer">

                <div className="CatagoriesCard" onClick={() => CategoryClick('Clothes')} >


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn.onlinewebfonts.com/svg/img_136814.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Clothes</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Phones')}>


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Phones</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Computers')}>


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn-icons-png.flaticon.com/512/3381/3381949.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Computers</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Beauty')}>


                    <div className="CatagoriesCardCont">
                        <img src="https://www.vhv.rs/dpng/d/452-4527829_beauty-beauty-icon-png-transparent-png.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Beauty</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Home')}>


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Home</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Watches')}>


                    <div className="CatagoriesCardCont">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/357/510/original/watch-vector-icon.jpg" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Watches</p>

                    </div>
                </div>           <div className="CatagoriesCard" >


                    <div className="CatagoriesCardCont" onClick={() => CategoryClick('Jewelry')}>
                        <img src="data:image/png;base64,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" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Jewelry</p>

                    </div>
                </div>           <div className="CatagoriesCard" onClick={() => CategoryClick('Pets')} >


                    <div className="CatagoriesCardCont" >
                        <img src="https://cdn.onlinewebfonts.com/svg/img_233291.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Pets</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Consumer Electronics')} >


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn.icon-icons.com/icons2/1474/PNG/512/icons8consumerelectronics_101574.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Consumer Electronic</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Bags')} >


                    <div className="CatagoriesCardCont">
                        <img src="https://cdn-icons-png.flaticon.com/512/5258/5258189.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Bags</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Toys')} >


                    <div className="CatagoriesCardCont" >
                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081993.png" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Toys</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Cars')} >


                    <div className="CatagoriesCardCont">
                        <img src="data:image/png;base64,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" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Cars</p>

                    </div>
                </div>
                <div className="CatagoriesCard" onClick={() => CategoryClick('Bikes')} >


                    <div className="CatagoriesCardCont">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/059/929/original/symbol-of-a-bike-isolated-on-white-background-bike-outline-icon-free-vector.jpg" alt="" className='CatagoriesCardImg' />

                        <p className='CatagoriesCardText'>Bike</p>

                    </div>
                </div>


            </div>

        </div>


    )
}
export default Catagories;
const CatagoriesCard = [
    { id: 1, img: 'https://cdn.onlinewebfonts.com/svg/img_136814.png', name: 'Clothes' },

    { id: 2, img: 'https://cdn-icons-png.flaticon.com/512/0/191.png', name: 'Phones' },
    { id: 3, img: 'https://cdn-icons-png.flaticon.com/512/3381/3381949.png', name: 'Computers' },
    { id: 4, img: 'https://www.vhv.rs/dpng/d/452-4527829_beauty-beauty-icon-png-transparent-png.png', name: 'Beauty' },
    { id: 5, img: 'https://cdn-icons-png.flaticon.com/256/25/25694.png', name: 'Home' },
    { id: 6, img: 'https://static.vecteezy.com/system/resources/previews/000/357/510/original/watch-vector-icon.jpg', name: 'Watches' },
    { id: 7, img: 'data:image/png;base64,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', name: 'Jewelry' },
    { id: 8, img: 'https://cdn.onlinewebfonts.com/svg/img_233291.png', name: 'Pets' },
    { id: 9, img: 'https://cdn.icon-icons.com/icons2/1474/PNG/512/icons8consumerelectronics_101574.png', name: 'Consumer Electronics' },
    { id: 10, img: 'https://cdn-icons-png.flaticon.com/512/5258/5258189.png', name: 'Bags' },
    { id: 11, img: 'https://cdn-icons-png.flaticon.com/512/3081/3081993.png', name: 'Toys' },
    { id: 12, img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADExMS7u7vr6+v7+/vT09P29va+vr64uLgwMDAVFRXv7+/09PRZWVleXl7h4eFpaWl7e3vIyMiioqJHR0dBQUGoqKigoKAqKire3t6ysrI5OTltbW2MjIwaGhqEhISWlpYjIyNaWloLCwtNTU18fHyJiYlra2vPz888PDzwRoN+AAAFuElEQVR4nO3b2WKiMBQG4FYhrCqgiCKguLX4/g84BhjLkrAjXvzf3QglOQROEpL5+gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAz7FwycwJLN9cPZm+FWzmEXH1qas1DGG9Mbfnb5ajav/uZkSauoo9iLOTyowt56r6BzJ1VTtRVvXR/bF30dQVbodYbcJLrRxh6no3Jdsd4ottQ2Pqyjcw27Jrr6n28rIyV1ryT/X2YGYge/PhLSlcGLEt7w4xhDRrmsmP5EvUDXcWWjeteL7/ye+kU6zt1d8Uer5TcsB9/aAbjrUvNKTy7oo3pBfy5zkgYumk9CbIuR9Fwcn/7d55V6XbkAsPG7ubWydHw9IBUVnm/n43dn3bEv1c/cIF5zw3jZ91bLHJPa6HEavbXpRLGAF/MGYkZ1w4h9fZp/XxOaMd8Scbn1nVqy2SZvK498DNPgxB+UWeBHlkKqXVJMJ0PFDR7RmZGLefMAYQw2wDLut67DSfVNacZJLO5FlVcnLZIaj9g3TMuq4+a35tfs9GFRXG2A266l1yZl1nIJl/V50qqUrz0hSipmFiabd5qj3xkMld7084YhQyRtiNkjtJK11/pvs3Nt+/9UmVSLgsR/fkuYZhCDH9zyImJUTxf4SPBiXpt9e1Nbf+9GEsZP/IDK/C9appx+N5v1dVz3tNmqxw5xzkNUluy/NOSIxHMfOgBMY7HlU9YH9W6k87q559W8Yf407BM3hlFhGS62i/tys/UMioz+uhNJebwNVb/siEN+zt5z51cBnHh6UMPmrdTR1V2TZs0j81JUwdDsflMNRX5d+pQ+EzB2lJfeowKqmH/l1JOHUQNR6927HBGsTE7v2a8bMf0sStV8pZT139JpZ9IjzUX/8D9JlI/nCvqpqhc9hZ2yv3jMGkRdn8wWOPCE32FS/yayAsRffWs442lsqrKDE6cWYAs+4R3ljX8wuTtsV4AzuzUJS0YTbkb/cIGTN6j7FGJHDauqc9o7PTfdaZ3SP0Stf6TXOzRGTHUaL/j9BmhABX6fKVSGbZoljZr/ungFKHf0p+X6/Sl+9qp4lsPniAVnLh6PV1YesknTujC5NLNe8aYbKy4uYe3vRrtzJwgMk3KyOfCRxOiOU1rY4R2vGPYfH6S/bPvajxNUtrr8kApvROMNe0Gims0savAmPOr8blMhNvV3FRjO44+cBY/Op3GyjCDf0pYNVnS98Qd6jovtNlgpB1xKPfaorz8iYfKRtEqNIwOBklTgtd9tNw0KI4g2KfcZ/VzhHmxhD0NZd4VVoz7mx3NHNIvJkbTZyFSU/nCMVshFf6BoS8OsVvAmdTTXu0qFKW+c+jReXHGMNEGK9Q8ytFqirVUny7+JNvOgzN9/udI5SyEdKFsRm/Vvev4XINzTOEf5i+9Pk3whukDel4lJlIE7ZY2cSt0DctrDj+VXxL7a4R5nIpHftV7c6jo8iBPuvQtXDmCDtFO4zcXqNV5wgzEWn07a+aCtLj7PW31oSam0mKd+DeOcLM8OhI26hqRk9v/ECzKKHmcYiKEXbfESf+NdqRFlu1CkWPt9oiXH2pqp6n1IY91t4yGY220aNYVotqtSDUPA564WZ2TzRPxmsSTB+NipW2eLtT/+BitMMLK44/D0vZJNhza6rrBOHuiebSinluPDI9KC/zhJw3a4S2YcWnWjp1FJ8XS4sYdtc/v9ghl/Qokf/Oj7rTljt98AbfUBDyijqOuneBO30YfgOTzmvEkbe8cT6q9Vo74OAsKXSfzzfEzOLaKP9ji/1KjL4xU2R9jhmpVNYA4h0biEtj4vNo23lKrai9Z2ttYQvRacSi5HxR1ohF5Uib10jnfBr3rorOa6R4tt62j49ylR/fvzvv+L+S7pwWtYnG2fIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGz/AJbJUaBqXPKAAAAAAElFTkSuQmCC', name: 'Cars' },
    { id: 13, img: 'https://static.vecteezy.com/system/resources/previews/006/059/929/original/symbol-of-a-bike-isolated-on-white-background-bike-outline-icon-free-vector.jpg', name: 'Bike' },

];