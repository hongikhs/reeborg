require("./../file_io.js");
require("./../storage.js");

var record_id = require("./../../lang/msg.js").record_id;
record_id("select-world");

$("#select-world").change(function() {
    if (RUR.storage.appending_world_name_flag){
        RUR.storage.appending_world_name_flag = false;
        return;
    }
    if ($(this).val() !== null) {
        RUR.file_io.load_world_file($(this).val());
    }
    try {
        localStorage.setItem(RUR.settings.world, $(this).find(':selected').text());
    } catch (e) {}
});