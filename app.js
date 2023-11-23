const inputMoney = new AutoNumeric('.payment-form__money', {
    allowDecimalPadding: AutoNumeric.options.allowDecimalPadding.never,
    decimalCharacter: AutoNumeric.options.decimalCharacter.comma,
    digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.dot
});

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }

$('.menu-item').on('click', function(e) {
    // Hiá»‡u á»©ng menu
    $('.menu-item').removeClass('active');
    $(this).addClass('active');

    // Hiá»‡u á»©ng light / dark mode
    let darkMode = $(this).data('dark');
    if (!!darkMode) {
        $('body').removeClass('light');
    } else {
        $('body').addClass('light');
    }

    // Chuyá»ƒn content
    let selector = $(this).data('content');
    $('.main-content').removeClass('active');
    $('.' + selector).addClass('active');

    // TrÆ°á»£t scrollbar tá»›i vá»‹ trĂ­ nĂºt áº¥n
    let itemX = $(this).position().left;
    $('.menu').animate({
        scrollLeft: itemX
    })
});

$('.list-item__open').on('click', function(e) {
    let href = $(this).data('href');
    window.open(href, '_blank');
});

$('.payment-account__copy, .list-item__copy').on('click', function(e) {
    let text = $(this).data('text');
    copyToClipboard(text);
    $('.copy').addClass('active');
    $('.copy-backdrop').addClass('active');
});

$('.copy-close').on('click', function(e) {
    $('.copy').removeClass('active');
    $('.copy-backdrop').removeClass('active');

});

$('.payment-form').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            amount: inputMoney.rawValue,
            username: $('.payment-form__username').val()
        },
        success: (response) => {
            $('#payment-account__bank').text(response.bank);
            $('#payment-account__stk').text(response.stk);
            $('#payment-account__ctk').text(response.ctk);
            $('#payment-account__amount').text(response.amount + 'Ä');
            $('.payment-account__qr').attr('src', `data:image/png;base64,${response.qr}`);

            $('#copy-stk').data('text', response.stk);
            $('#copy-amount').data('text', response.amount);

            $('.payment-account').addClass('active');
        },
        error: (err) => {
            alert('Lá»—i táº¡o QR Code');
        }
    })

});

$('.download-overlay').click(function(e) {
    const a = document.createElement('a');
    a.href = $('.payment-account__qr').attr('src');
    a.download = 'qrcode.png';
    a.click();
});

console.log('MĂ£ nguá»“n nĂ y Ä‘Æ°á»£c thá»±c hiá»‡n bá»Ÿi iamhoang.vn');
console.log('NGHIĂM Cáº¤M SAO CHĂ‰P DÆ¯á»I Má»ŒI HĂŒNH THá»¨C !');
console.log(`
â–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ•—   â–ˆâ–ˆâ–ˆâ•—â–ˆâ–ˆâ•—  â–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ•—   â–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—   â–ˆâ–ˆâ•—   â–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ•—   â–ˆâ–ˆâ•—
â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â•â•â•   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ•‘
â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â–ˆâ–ˆâ–ˆâ–ˆâ•”â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â–ˆâ–ˆâ•— â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â–ˆâ–ˆâ•— â–ˆâ–ˆâ•‘
â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘â•â–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘  â•â–ˆâ–ˆâ•— â–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘
â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘ â•â•â• â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â•â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘ â•â–ˆâ–ˆâ–ˆâ–ˆâ•‘â•â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•—â•â–ˆâ–ˆâ–ˆâ–ˆâ•”â• â–ˆâ–ˆâ•‘ â•â–ˆâ–ˆâ–ˆâ–ˆâ•‘
â•â•â•â•â•â•  â•â•â•â•â•â•     â•â•â•â•â•â•  â•â•â• â•â•â•â•â•â•â• â•â•â•  â•â•â•â•â•â•  â•â•â•â•â• â•â•â•â•â•â•â• â•â•â• â•â•â•â•â•  â•â•â•  â•â•â•â•â•
                                                                                       
`);