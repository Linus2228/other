import { Button } from './button.js'
import { Image } from './image.js'
import { TitleBar } from './title-bar.js'

const b = new Button('Click me')

const image = new Image('https://tinypng.com/images/social/website.jpg')

const titleBar = new TitleBar('My title')
titleBar.addLink('title1', 'cats')
titleBar.addLink('title2', 'dogs')


b.appendToElement($('body'))
image.appendToElement($('body'))
titleBar.appendToElement($('body'))