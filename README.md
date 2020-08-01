# yed-tag-input

> yed-tag-input

[![NPM](https://img.shields.io/npm/v/yed-tag-input.svg)](https://www.npmjs.com/package/yed-tag-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yed-tag-input
```

## Usage

```tsx
import React, { useState } from 'react'

import YedTagInput from 'yed-tag-input'
import 'yed-tag-input/dist/index.css'

const Example=()=>{
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
      <YedTagInput tags={tags} tagInputErrorControl={true}  tagInpuTitle={'Kişileri Ekle'} onChange={setTag}  removeTag={(item) => {deleteTag(item)}}  />
   )

}
export default Example
```
# Props
 Props Name | Description | Default Value | Required
 :---:  |  :----: | :---:| :---: |
  tags | The tag array that the input element contains | null | true
  tagInputErrorControl | Specifies whether the tag input element will control elements of the same value | false |false
  tagInpuTitle|The title value of the tag input element | null | false
  tagColor|Background color of tags | colorBlue | false
  textColor|Text color of tags | #fff | false
  tagInputTitleColor|The title color of the tag input element|#9799a7 | false
  errorText|The value that tag input element will take in case of error|Etiket daha önce kullanıldı. | false
  tagInputErrorColor|Determines the color of the text shown in the error state of the tag input element|#ff4d4f | false


# Functions
 Function Name | Description |  Required | Return Value
 :---:  |  :----: | :---:| :---:
  onChange | Works when a new tag is added| true | tag(string)
  removeTag |  Works when a tag is deleted from the list| true | The value to be deleted and the sequence number of the value to be deleted ({index, item})









## License

MIT © [yasiinn](https://github.com/YASIINN)
