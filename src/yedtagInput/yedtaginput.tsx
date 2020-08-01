import * as React from 'react'
import  styles  from  './yedtaginput.css'
import {useState} from "react";

interface PropTypes {
    tags: Array<any>,
    onChange(tag: any): void
    removeTag(removedTag: any): void,
    errorText?: string,
    tagColor?: "colorPurple" | "colorGreen" | "colorPink" | "colorGray" | "colorCyan" | "colorRed" | "colorBlue" | "colorOrange" | "colorYellow",
    textColor?: string,
    tagInpuTitle?: string,
    tagInputTitleColor?:string,
    tagInputErrorColor?:string,
    tagInputErrorControl?:boolean
}

const YedTagInput = (props: PropTypes) => {
    const [text, setText] = useState("")
    const [opacity, setOpacity] = useState(1)
    const [opacityIndex, setOpacityIndex] = useState(0)
    const [errorMode, setErrorMode] = useState(false)
    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13 && text.trim() !== "") {
            const filterIndex = props.tags.findIndex((tagItem) => {
                return tagItem === text
            })
            setText("")
            if (filterIndex === -1) {
                if(props.tagInputErrorControl===true){
                    setErrorMode(false)
                }
                const tag = e.target.value
                props.onChange(tag)
            } else {
                if(props.tagInputErrorControl===true){
                    setErrorMode(true)
                }
                setOpacityIndex(filterIndex)
                setOpacity(0)
                setTimeout(() => {
                    setOpacity(1)
                }, 250)
            }
        }
    }
    const handleRemoveTag = (index: number, item: any) => {
        props.removeTag({index, item})
    }
    const handleChange = (e: any) => {
        setText(e.target.value)
    }
    return (
        <div className={styles.yedwrapper}>
            {props.tagInpuTitle ? <div className={styles.yedtagtitle} style={{color:props.tagInputTitleColor?props.tagInputTitleColor:"#9799a7"}}>{props.tagInpuTitle}</div>
                : null}
            <div className={styles.yedTagInputWrapper}>
                {props.tags.map((item, index) => <div
                    style={{
                        opacity: index === opacityIndex ? opacity : 1,
                        color: props.textColor ? props.textColor : "#fff"
                    }}
                    className={styles.yedtags + " " + (props.tagColor ?styles[props.tagColor] : styles.colorBlue)}
                    key={index}>
                     <span className={styles.yedtasgcontent}>
                         {item}
                    </span>
                    <span onClick={() => {
                        handleRemoveTag(index, item)
                    }} className={styles.yedtagsclose}>
                    X
                </span>
                </div>)}
                <div className={styles.yedtagsInput}>
                    <input type={"text"} value={text} onChange={(e) => {
                        handleChange(e)
                    }} onKeyDown={handleKeyDown}/>
                </div>
            </div>
            {errorMode ? (<div className={styles.yedtagerror} style={{color:props.tagInputErrorColor?props.tagInputErrorColor:"#ff4d4f"}}>
                <em>{props.errorText ? props.errorText : "Etiket daha önce kullanıldı."}</em>
            </div>) : null}
        </div>
    )
}
export default YedTagInput
