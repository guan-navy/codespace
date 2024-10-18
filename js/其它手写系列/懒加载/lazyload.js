document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazy');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.getAttribute('data-src');
                        lazyImage.removeAttribute('data-src');
                        lazyImage.classList.remove('lazy');
                        observer.unobserve(lazyImage);
                    }
                });
            }
        );

        lazyImages.forEach((image) => {
            lazyImageObserver.observe(image);
        });
    } else {
        // 在不支持 IntersectionObserver 的浏览器中
        function debounce(func, delay) {
            let timeoutId;

            return function (...args) {
                // 清除之前的定时器
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // 设置一个新的定时器
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        }
        const lazyLoad = debounce(() => {
            lazyImages.forEach((image) => {
                if (
                    image.getBoundingClientRect().top < window.innerHeight &&
                    image.getBoundingClientRect().bottom > 0
                ) {
                    image.src = image.getAttribute('data-src');
                    image.removeAttribute('data-src');
                    image.classList.remove('lazy');
                }
            });

            if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
            }
        });

        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
});
