    // Ngăn chặn mở mã nguồn khi nhấn Ctrl + U
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.keyCode === 85) {
            event.preventDefault();
            // Chuyển hướng trang sang trang khác
            window.location.href = 'error.html'; // Thay đổi URL thành URL của trang bạn muốn chuyển hướng đến
        }
    });
    // Ngăn chặn mở DevTools khi nhấn phím F12
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 123) {
            event.preventDefault();
            // Chuyển hướng trang sang trang 'error.html'
            window.location.href = 'error.html'; // Thay đổi URL thành URL của trang bạn muốn chuyển hướng đến
        }
    });
     // Kiểm tra xem DevTools có mở không
     function checkDevTools() {
        setInterval(function() {
            if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
                // Thêm class 'devtools-open' vào body nếu DevTools được mở
                document.body.classList.add('devtools-open');
                // Chuyển hướng trang sang trang 'error.html'
                window.location.href = 'error.html'; // Thay đổi URL thành URL của trang bạn muốn chuyển hướng đến
            } else {
                // Loại bỏ class 'devtools-open' khỏi body nếu DevTools được đóng
                document.body.classList.remove('devtools-open');
            }
        }, 1000); // Kiểm tra mỗi giây
    }

    // Gọi hàm kiểm tra DevTools
    checkDevTools();