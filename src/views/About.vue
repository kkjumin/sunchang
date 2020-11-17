<template>
    <div class="about" style="width: 1000px; height: 1000px; margin: 0 auto">
        <div class="example">
            <quill-editor
                style="height: 500px"
                class="editor"
                ref="myTextEditor"
                :value="content"
                :options="editorOption"
                @change="onEditorChange"
            />
        </div>
    </div>
</template>

<script>
// import NanumBarunGothic from '@/assets/fonts/NanumBarunGothic.ttf';

export default {
    data() {
        return {
            content: '',
            editorOption: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        // ['blockquote', 'code-block'],
                        [{ header: 1 }, { header: 2 }],
                        // [{ list: 'ordered' }, { list: 'bullet' }],
                        // [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        // [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        // [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        // [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        // ['clean'],
                        ['link', 'image', 'video']
                    ]
                },
                placeholder: '내용을 입력하세요...'
            }
        };
    },
    methods: {
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text);
            this.content = html;
        },
        summit() {
            console.log(this.content);
        }
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quill;
        }
    },
    mounted() {}
};
</script>
