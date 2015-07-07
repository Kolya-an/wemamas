function ajaxFormDlg(title, url, success_func) {
    BootstrapDialog.show({
        // 
        message: $("<div id='dlg_cnt'></div>").load(url),
        title: title,
        buttons: [
            {
                label: "Сохранить",
                action: function (dialogItself) {
                    $("#dlg_cnt form").ajaxSubmit({
                        success: function (data) {
                            if (!success_func)
                                $("#dlg_cnt").html(data);
                            else
                                success_func(data, dialogItself);
                        }
                    });
                }
            },
            {
                label: 'Закрыть',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }
        ]
    });
}