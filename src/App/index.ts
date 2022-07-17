import { Component, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'
import fixedScroll from '../tool/fixedScroll'

import style from './index.scss'
import template from './index.html'

import pages from './pages/lazy-load.js'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    chapter: Array<any>
    currentPage: any

    $setup() {
        return {
            chapter: ref(['webgl', 'quick']),
            currentPage: ref(null)
        }
    }

    changeChapter(event) {
        this.chapter = [event.target.getAttribute('kind'), event.target.getAttribute('tag')]
        window.location.href = "#/" + this.chapter[0] + "/" + this.chapter[1] + "?fixed=top"
        this.loadPage("top")
    }

    loadPage(fixedName) {
        pages[this.chapter[0]][this.chapter[1]]().then(data => {
            this.currentPage = data.default
            fixedScroll(fixedName)
        })
    }

    fixedScroll(event) {
        fixedScroll(event.target.getAttribute('tag'))
        window.location.href = "#/" + this.chapter[0] + "/" + this.chapter[1] + "?fixed=" + event.target.getAttribute('tag')
    }

    $mounted() {
        let urlObj = urlFormat()
        this.chapter = [urlObj.router[0] || "webgl", urlObj.router[1] || "quick"]
        this.loadPage(urlObj.params.fixed || "top")
    }

}
