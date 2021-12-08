import React, { Component } from 'react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

class ComponentOne extends Component {

    constructor(props) {
        super(props)
    }

    createPDF = () => {
        let element = document.getElementById('wrapper')
        html2canvas(element).then((canvas) => {
          let imgData = canvas.toDataURL('image/png')
          let doc = new jsPDF()
          let imgHeight = canvas.height * 200 / canvas.width
          doc.addImage(imgData, 0, 0, 208, imgHeight)
          window.open(URL.createObjectURL(doc.output("blob")));
        })
    }
    render() {
        if(this.props.data==true){
            this.createPDF()
        }
        return (
            <div id="wrapper">
                <h3>This is ComponentOne</h3>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        )
    }
}

export default ComponentOne
