// mydad　画像選択→拡大

$(function () {
	$(".mydad_sub_img li").eq(0).addClass("select");

	$(".mydad_sub_img img").click(function () {
		var img = $(this).attr("src");

		$(".mydad_sub_img li").removeClass("select");
		$(this).parent().addClass("select");

		$(".mydad_main img").fadeOut(500, function () {
			$(this).attr("src", img),
				$(this).fadeIn(500)
		});
	});
});


//gallery　画像選択→拡大

$(function () {
	if (window.matchMedia("(max-width: 767px)").matches) {
		// windowのサイズが767px以下
		$(".gallery_zoom").css('display', 'none');


		$(".item").click(function () {
			var img = $(this).children("img").attr("src");
			var text = $(this).children("p").text();

			$(".gallery_zoom").fadeOut(500, function () {
				$(this).children("img").attr("src", img),
					$(this).children("p").text(text),
					$(this).fadeIn(300)
			});

			$(".gallery_zoom").addClass("open");
			$("#js-overlay").addClass("open");
		});

		$("#js-close").click(function () {
			$(".gallery_zoom").hide().removeClass("open");
			$(".gallery_zoom").css('display','none');
			$("#js-overlay").removeClass("open");
		});


	} else {
		// windowのサイズが768px以上
		$(".item").click(function () {
			var img = $(this).children("img").attr("src");
			var text = $(this).children("p").text();

			$(".gallery_zoom").fadeOut(500, function () {
				$(this).children("img").attr("src", img),
					$(this).children("p").text(text),
					$(this).fadeIn(300)
			});

			$(".gallery_zoom").addClass("open");
		});

		$(".item").mouseover(function () {
			$(".tab_content").css('z-index', '30');
		});
	}
});

window.addEventListener("load", function () {

	//プラグインを定義
	gsap.registerPlugin(ScrollTrigger);

	const wrapper = document.querySelector('.slides-wrapper');

	if (wrapper) {
		// gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
		const panels = gsap.utils.toArray('.content');
		const wrapperWidth = wrapper.offsetWidth;
		console.log(wrapperWidth);
		/**
		* 横スクロール開始
		*/
		gsap.to(panels, {
			xPercent: -100 * (panels.length - 1), // transformX
			ease: "none", // easingの設定
			scrollTrigger: { // scrollTrigger
				// markers: true,
				trigger: wrapper, // アニメーションの対象となる要素
				pin: true, // 要素を固定する
				scrub: 2, // スクロールとアニメーションを同期させる。数値で秒数の設定に
				end: () => "+=" + wrapperWidth // アニメーションの終了タイミング
			}
		})
	}
});

