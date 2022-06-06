window.addEventListener('load', function () {
    var leftBtn = document.querySelector('.prev');
    var rightBtn = document.querySelector('.next');
    var focus = document.querySelector('.area');
    var btnNav = document.querySelector('.bottom-nav');

    // 鼠标经过 左右显示
    focus.addEventListener('mouseenter', function () {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
    });

    focus.addEventListener('mouseout', function () {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    });




    //动态生成小圆圈
    //1 利用节点获得focus里图片的张数
    var numOfPic = focus.childElementCount;
    //2 动态生成小圆圈
    for (var i = 0; i < numOfPic; i++) {
        var newLi = document.createElement('li');
        btnNav.appendChild(newLi);
        newLi.setAttribute('index', i);
        //点击小圆圈时，这个小圆圈会亮
        newLi.addEventListener('click', function () {
            //排他思想，把亮的点全灭了
            for (var i = 0; i < numOfPic; i++) {
                btnNav.children[i].removeAttribute('class');
            }

            //给当前点击的对象亮起来
            this.className = 'current';

            //让area移动，移动的距离是小圆圈的索引号乘图片宽度
            slide(focus, this.getAttribute('index') * (-1200));
        })

    }
    //3 给第一个小圆圈添加current类,让他默认会亮
    btnNav.children[0].className = 'current';

    //克隆第一张图片
    var cloneLi = focus.children[0].cloneNode(true);
    focus.appendChild(cloneLi);


    //点击右侧按钮
    var num = 0;
    var circle = 0;
    rightBtn.addEventListener('click', function () {
        //如果到了最后一张图，就快速复原到第一张
        if (num == numOfPic) {
            focus.style.left = 0;
            num = 0;
        }

        if (circle = numOfPic) {
            circle = 0;
        }
        num++;
        circle++;
        slide(focus, num * (-1200));
        for (var i = 0; i < numOfPic; i++) {
            btnNav.children[i].removeAttribute('class');
        }
        btnNav.children[circle].className = 'current';
    })





})