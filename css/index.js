let circle1 = document.getElementById('circle1')
        let ball1 = document.getElementById('ball1')
        let page1 = document.getElementById('page1')
        let page2 = document.getElementById('page2')
        let page3 = document.getElementById('page3')
        let page4 = document.getElementById('page4')
        let page5 = document.getElementById('page5')
        let page6 = document.getElementById('page6')
        let page7 = document.getElementById('page7')
        let page77 = document.getElementById('page77')
        let sp = document.getElementById('sp')
        let fig1 = document.getElementById('fig1')
        let box1 = document.getElementById('box1')
        let mine1 = document.getElementById('mine1')
        let mine2 = document.getElementById('mine2')
        let mini = document.getElementById('mini')
        let portfolio = document.querySelectorAll('#portfolio>li>a')
        page2.style.top = (page1.clientHeight) + 'px'
        page3.style.top = ((page1.clientHeight) + (page2.clientHeight) + 200) + 'px'
        page4.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + 400) + 'px'
        page5.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + 1400) + 'px'
        page6.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + 1700) + 'px'
        page7.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + (page5.clientHeight) + 1800) + 'px'
        box1.style.top = (circle1.clientHeight) + 'px'
        document.getElementsByTagName('body')[0].onresize = function () { _height() };
        function _height() {
                box1.style.top = ((circle1.clientHeight)) + 'px'
                page2.style.top = (page1.clientHeight) + 'px'
                page3.style.top = ((page1.clientHeight) + (page2.clientHeight) + 200) + 'px'
                page4.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + 400) + 'px'
                responsiv()
        }
        // rotate page1
        // scroll
        document.getElementsByTagName('main')[0].addEventListener('scroll', (e) => {
                st = e.target.scrollTop
                sp.innerHTML = st
                if (st >= ((page3.clientHeight) + 900)) {
                        responsiv()
                }
                if (st >= ((page7.offsetTop) - 300)) {
                        page77.children[0].style.opacity = '1'
                        page77.children[0].style.transform = 'translateY(0)'
                        page77.children[1].style.opacity = '1'
                        page77.children[1].style.transform = 'translateX(0)'
                        page77.children[2].style.opacity = '1'
                        page77.children[2].style.transform = 'translateY(0)'
                        page77.children[3].style.opacity = '1'
                        page77.children[3].style.transform = 'translateY(0)'

                } else {
                        page77.children[0].style.opacity = '0'
                        page77.children[0].style.transform = 'translateY(120px)'
                        page77.children[1].style.opacity = '0'
                        page77.children[1].style.transform = 'translateX(120px)'
                        page77.children[2].style.opacity = '0'
                        page77.children[2].style.transform = 'translateY(120px)'
                        page77.children[3].style.opacity = '0'
                        page77.children[3].style.transform = 'translateY(120px)'
                        responsiv()

                }
                if (st < 133) {
                        circle1.style.transform = 'rotate(0deg)'
                        ball1.style.transform = ' translateX(' + (0) + 'px  )'
                }
                else if (st >= 133 && st < 267) {
                        circle1.style.transform = 'rotate(20deg)'
                        ball1.style.transform = ' translateX(' + (st + 50) + 'px  ) rotate(60deg)'
                } else if (st >= 267 && st < 400) {
                        circle1.style.transform = 'rotate(20deg)'
                        ball1.style.transform = ' translateX(' + (st + 100) + 'px  )rotate(120deg)'
                }
                else if (st >= 400 && st < 533) {
                        circle1.style.transform = 'rotate(20deg)'
                        ball1.style.transform = 'translateX(' + (st + 200) + 'px  )rotate(180deg)'
                } else if (st >= 533 && st < 667) {
                        circle1.style.transform = 'rotate(10deg)'
                        ball1.style.transform = 'translateX(' + (st + 300) + 'px  )rotate(260deg)'
                } else if (st >= 667 && st < 700) {
                        ball1.style.transform = 'translateX(' + (st + 300) + 'px  )rotate(320deg)'
                        circle1.style.transform = 'rotate(-10deg)'
                }
                else {
                        box1.children[0].style.opacity = '1'
                        box1.children[0].style.transform = 'translateY(0)'
                        box1.children[1].style.opacity = '1'
                        box1.children[1].style.transform = 'translateY(0)'
                        circle1.style.transform = 'rotate(0deg)'
                        ball1.style.transform = 'translateX(' + (st + 300) + 'px  )rotate(360deg)'
                }
                if (st >= page1.clientHeight) {
                        mine1.style.top = -((st / 4) - 300) + 'px'
                        mine2.style.top = -(st / 10) + 'px'
                }
        })
        // function for responsive
        let o = window.matchMedia("(max-width: 1200px)")
        let r = window.matchMedia("(max-width: 1000px)")
        let q = window.matchMedia("(min-width: 1600px)")

        function responsiv() {
                if (o.matches) { // If media query matches
                        mini.children[1].style.transform = 'translateY(' + -((st / 10) - 400) + 'px)'
                        mini.children[2].style.transform = 'translateY(' + -((st / 10) - 400) + 'px)'
                        mini.children[3].style.transform = 'translateY(' + -((st / 10) - 400) + 'px)'
                        mini.children[4].style.transform = 'translateY(' + -((st / 10) - 400) + 'px)'
                        mini.children[5].style.transform = 'translateY(' + -((st / 10) - 400) + 'px)'
                        page5.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + 400) + 'px'


                } else {
                        mini.children[1].style.transform = 'translate(200px ,' + -((st / 10) - 400) + 'px)'
                        mini.children[2].style.transform = 'translate(300px ,' + -((st / 10) - 650) + 'px)'
                        mini.children[3].style.transform = 'translateY(' + -((st / 9) - 1100) + 'px)'
                        mini.children[4].style.transform = 'translateY(' + -((st / 8) - 600) + 'px)'
                        mini.children[5].style.transform = 'translate(-400px , ' + -((st / 6) - 1100) + 'px)'

                }
                if (r.matches) {
                        page6.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + 500) + 'px'
                        page7.style.top = ((page1.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + (page5.clientHeight) + 600) + 'px'

                }
                if (q.matches) {
                        if (st >= ((page7.offsetTop) - 1400)) {
                                page77.children[0].style.opacity = '1'
                                page77.children[0].style.transform = 'translateY(0)'
                                page77.children[1].style.opacity = '1'
                                page77.children[1].style.transform = 'translateX(0)'
                                page77.children[2].style.opacity = '1'
                                page77.children[2].style.transform = 'translateY(0)'
                                page77.children[3].style.opacity = '1'
                                page77.children[3].style.transform = 'translateY(0)'
                        }
                }
        }