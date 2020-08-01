import React, { useState } from 'react'

import YedTagInput from 'yed-tag-input'
import 'yed-tag-input/dist/index.css'

const App = () => {
  const initTags: Array<any> = []
  const [tags, setTags] = useState(initTags)
  const setTag = (tag: any) => {
    setTags([...tags, tag])
  }
  const deleteTag = (item: any) => {
    const deletedTags = JSON.parse(JSON.stringify(tags))
    deletedTags.splice(item.index, 1)
    setTags(deletedTags)
  }
  return (
    <>
      <p>Hata Durumları İçerisinde Aynı Metinsel İfadeyi Barındırıyorsa Devreye Girecektir..</p>
    <div className={'mt20'}>
      <YedTagInput tags={tags} tagInputErrorControl={true} tagInpuTitle={'Kişileri Ekle'} onChange={setTag} removeTag={(item) => {deleteTag(item)}}/>
    </div>
    <div className="mt20">
      <YedTagInput tags={tags} tagInputErrorControl={false} tagInpuTitle={'Kontrol Devre Dışı'} tagColor={'colorPurple'}
                   onChange={setTag} removeTag={(item) => {
        deleteTag(item)
      }}/>
    </div>
      <div className="mt20">
        <YedTagInput tags={tags} errorText={"Bu Kullanıcı Listeye Daha Önce Eklendi."} tagInputErrorControl={true} tagInpuTitle={'Özel Kontrol Mesajı İle Beraber Kullanım'} tagColor={'colorPink'}
                     onChange={setTag} removeTag={(item) => {
          deleteTag(item)
        }}/>
      </div>
      <div className="mt20">
        <YedTagInput tags={tags}  tagInputErrorColor={"blue"} tagInputTitleColor={"pink"}  tagInputErrorControl={true} tagInpuTitle={'Başlık Rengi ve Hata Rengi Özelleştirerek Kullanımı'} tagColor={"colorRed"}
                     onChange={setTag} removeTag={(item) => {
          deleteTag(item)
        }}/>
      </div>
    </>
  )
}

export default App
