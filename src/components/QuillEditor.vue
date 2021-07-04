<template>
  <div>
    <quill-editor
      class="editor"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
// 工具栏配置
const toolbarOptions = [
     // 加粗 斜体 下划线 删除线
    ["bold", "italic", "underline", "strike"],
    // 引用  代码块
    ["blockquote", "code-block"],
    // 1、2 级标题
    [{ header: 1 }, { header: 2 }],
    // 有序、无序列表
    [{ list: "ordered" }, { list: "bullet" }],
    // 上标 、下标
    [{ script: "sub" }, { script: "super" }],
    // 缩进
    [{ indent: "-1" }, { indent: "+1" }],
    // 文本方向
    [{'direction': 'rtl'}],
    // 字体大小
    [{ size: ["small", false, "large", "huge"] }],
    // 标题
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    // 字体颜色、字体背景颜色
    [{ color: [] }, { background: [] }],
    // 字体种类
    [{ font: [] }],
    // 对齐方式
    [{ align: [] }],
    // 清除文本格式
    ["clean"],
    // 链接
    ["link",]
]
// 导入富文本
import { quillEditor } from "vue-quill-editor";

export default {
    name: 'QuillEditor',
    props: {
        value: {
            type: String
        }
    },
    components: {
        quillEditor
    },
    data() {
    return {
        content: this.value,
            editorOption: {
                placeholder: "",
                theme: "snow", // or 'bubble'
                placeholder: "输入内容",
                modules: {
                    toolbar: {
                        container: toolbarOptions,
                    }
                }
            },
        }
    },
    methods: {
        onEditorBlur() {

        },
        onEditorFocus() {

        },
        onEditorChange() {
          // 调佣父组件方法，实现自子组件向父组件传值
           this.$emit('content', this.content)
        },
    }
}
</script>

<style>
.editor{
  line-height: normal !important;
  min-height: 400px;
  color: white;
}
.ql-editor{
  min-height: 400px;
}
.editor:hover{
   box-shadow: 0px 0px 5px white;
}
.ql-editor:hover{
  box-shadow: 0px 0px 5px white;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>
