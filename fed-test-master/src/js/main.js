var reportsWidget = {
    options: {
        containerSelector: '.cards',
        template: (
            '{{#.}}' +
            '<li class="cards_item">' +
            '<div class="card">' +
            '<div class="card_image"><img src="{{cover}}"></div>' +
            '<div class="card_content">' +
            '{{#documents}}' +
            '<a href="{{url}}" target="_blank">{{title}}<span> ({{file_size}} {{file_type}}) </span></a><br>' +
            '{{/documents}}' +
            '</div>' +
            '</div>' +
            '</li>' +
            '{{/.}}'
        )
    },

    init: function () {
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) {
        var inst = this,
            options = inst.options;
        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();