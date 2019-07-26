import {createModal} from './lib/elements'
import {bMForm, bMOHistoria, mHistoria, bMCHistoria} from './assets/var-actions'
import {Form} from './assets/var-modal'
import {toggleNav, scrollNav, animaHeader, colorHeader, showButtonUp, upToTop} from './dev/nav'
import {CopyDate} from './dev/footer'
import {printModal, printModalClasic} from './dev/modal'


toggleNav()
scrollNav()
animaHeader()
colorHeader()
CopyDate()
showButtonUp()
upToTop()
printModal(bMForm, createModal,Form)
printModalClasic(bMOHistoria, mHistoria, bMCHistoria)
