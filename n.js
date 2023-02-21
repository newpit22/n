$(() => {
  const U = {
      G(e) {
          let t = e.getAttribute("data-target");
          if (!t || t === "#") {
              t = e.getAttribute("href") || "";
          }
          try {
              return document.querySelector(t) ? t : null;
          } catch (n) {
              return null;
          }
      },
      I(e) {
          const t = e.parentElement.getAttribute("data-id");
          try {
              return document.getElementById(t) ? document.getElementById(t) : null;
          } catch (n) {
              return null;
          }
      }
  };
  $(document).on("click", '[data-toggle="showw"]', function (e) {
      if (e.currentTarget.tagName === "A" && $(this).data("prevent") != false) {
          e.preventDefault();
      }
      const t = $(this);
      const n = U.G(this);
      const r = [].slice.call(document.querySelectorAll(n));
      $(r).each(function () {
          const e = $(this);
          const r = t.data("toggle");
          e.toggleClass(r);
          const i = t.data("focus");
          if (i != undefined) {
              $(i).focus();
          }
      });
  });
});
$(() => {
  const e = setInterval(function () {
      if ($("header").length) {
          clearInterval(e);
          const t = {
              offset: 100,
              classes: {
                  initial: "headroom",
                  pinned: "headroom--pinned",
                  unpinned: "headroom--unpinned",
                  top: "headroom--top",
                  notTop: "headroom--not-top"
              }
          };
          $("header").headroom(t);
      }
  }, 100);
});
$(() => {
  $("[data-ajax-cart-request-button]").on("click", function () {
      setTimeout(() => {
          window.location.reload();
      }, 1000);
  });
});
$(() => {
  $(window).on("load", function () {
      const e = setInterval(function () {
          if ($("header").length) {
              clearInterval(e);
              $(".js-drop-modal-link").on("mouseenter", function () {
                  te(this);
              });
              $("header").on("mouseleave", function (e) {
                  setTimeout(() => {
                      ne();
                  }, 300);
              });
          }
      }, 100);
  });
  function n() {
      $(".drop-modal").removeClass("show").removeClass("transition-drop");
      $(".js-drop-modal-link").removeClass("show");
      $("header").removeClass("drop-open");
      $(".js-site-menu-drawer").height(0).addClass("transition");
  }
  function t(e) {
      const t = $(e);
      const r = t.next(".drop-modal");
      const i = $("header");
      if (!r.length) return false;
      if (r.hasClass("show")) return false;
      $(".drop-modal.show").removeClass("show").removeClass("transition-drop");
      $(".js-drop-modal-link").removeClass("show");
      $(".js-site-menu-drawer").height(r.outerHeight() + i.outerHeight() - 40).addClass("transtition");
      t.addClass("show");
      r.addClass("show").addClass("transition-drop");
      i.addClass("drop-open");
  }
});
