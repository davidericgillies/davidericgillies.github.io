/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#list-top-rated').css('list-style-type', 'none');
        $('div').css('color', 'grey');
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('.heading-quotes').css('padding-top', '12px');
        $('.heading-quotes').css("text-align", "center"); 
        $('#quotes:last-child').css("text-align", "center");
        $('#section-quotes').prependTo('#sections');
        $('#image-billy').attr('src', 'images/billy/billy-0.jpg');
        $('#section-bio').css({"border-color": 'grey', 
             "border-weight":"0px", 
             "border-style":"solid"});
        $('#section-bio').css("text-align", "center"); 
        $('#section-praise').css({"border-color": 'grey', 
             "border-weight":"0px", 
             "border-style":"solid"});
        $('#section-praise').css("text-align", "center"); 
        $('#section-bio').css('padding-right', '10px').css('padding-left', '10px');
        $('#section-praise').css('padding-right', '10px').css('padding-left', '10px');
        
        $('#riderHeader').css('padding-top', '12px').css('padding-left', '50px');
        $('#riderHeader').css("text-align", "center");
        $('body').css({"background-color": "rgb(220, 230, 200)"});
        $('nav').css({"background": "grey"}).css({'border': '5px solid'}).css({'color': 'grey'});
        $('main').css({"border-color": 'grey', 'border': '5px solid'});
       $('#section-top-rated').css("text-align", "center");
        $('#list-recordings').css("text-align", "center");
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
    
        let topRated = data.discography.topRated;
        let $section = $('<section>').attr('id', 'top-rated');
        // _.map(topRated, function(recording) {
        //   $section.append($('<li>').text(recording.title)).appendTo($('#list-top-rated'));
        //   $section.append($('#top-rated').css({"border-color": 'grey', "border-weight":"1px", "border-style":"solid"}));
         
        // });
         _.map(topRated, function(recording) {
           return $section.append($("<li>").attr('class', 'recordingTop')
            .append($('<div>').text('Title: ' + recording.title))
            .append($('<div>').text('Artist: ' + recording.artist))
            .append($('<div>').text('Release: ' + recording.release))
            .append($('<div>').text('Year: ' + recording.year))
            .attr('src', recording.art))
            .appendTo($('#list-top-rated'));
        });
       
        
    console.log(topRated);
        let $sectionRecordings = $('<section>').attr('id', 'section-recordings');
        $sectionRecordings.appendTo($('#list-top-rated'));
       
        let $ulList =$('<ul>').attr('id', 'list-recordings');
        $ulList.appendTo('#section-recordings');
        
        let $recordingHeader = $('<header>').attr('id', 'recordings');
        $recordingHeader.appendTo($('#list-recordings')).text('Recordings');
        
        
//### TODO 5 : Populate the Top Rated List

        let recordings = data.discography.recordings;
        _.map(recordings, function(recording) {
           return $ulList.append($("<li>").attr('class', 'recording2')
            .append($('<div>').addClass('recordingDiv').text('Title: ' + recording.title))
            .append($('<div>').addClass('recordingDiv').text('Artist: ' + recording.artist))
            .append($('<div>').addClass('recordingDiv').text('Release: ' + recording.release))
            .append($('<div>').addClass('recordingDiv').text('Year: ' + recording.year))
            .attr('src', recording.art));
        });
        
        $('.recordingTop').css({"border-color": 'grey', "border-weight":"1px", "border-style":"solid"});
        $('.recordingTop').css('list-style-type', 'none');
        
        $('.recording2').css({"border-color": 'grey', "border-weight":"1px", "border-style":"solid"});
        $('.recording2').css('list-style-type', 'none');
        
        let $divTop = $('<div>')
            .attr('id', 'image-container-recording')
            .addClass('image-container')
            .append($('<img>').attr('id', 'recording-image').attr('src', 'images/album/voice-in-the-night.jpg'));
            
        $divTop.appendTo('#header-top-rated');
        
        let $divRecording = $('<div>')
            .attr('id', 'image-container-recording')
            .addClass('image-container')
            .append($('<img>').attr('id', 'recording-image2').attr('src', 'images/album/eastern-rebellion.jpg'));
            
        $divRecording.appendTo('#recordings');
        
        let $billy = data.images.billy;
      
            var count = 0;
            $('#image-billy').on('click', function() {
                count === $billy.length - 1 ? $('#image-billy').attr('src', $billy[count = 0]):count++;
                return $('#image-billy').attr('src', $billy[count]);
            });

      
            // let count2 = 0;
            // $('.recordingTop').on('click', function(event) {
            //     let $li = (event.currentTarget);
            //     return $('#recording-image').attr('src', $(this).attr('src'));
            // });
      

            
            $('.recordingTop').on('click', function(e) {
                if ($(e.target).parent().hasClass('recordingTop')) { 
                return $('#recording-image').attr('src', $(this).attr('src'));
                }
            });
            
            
             $('.recording2').on('click', function(e) {
                if ($(e.target).parent().hasClass('recording2')) { 
                return $('#recording-image2').attr('src', $(this).attr('src'));
                }
            });
            
           
            
    var $riderData = data.rider;        
    var createTable = function(rider){
    var createRow = function(data){
        var $row = $("<tr>");
        var $thing = $("<td>").text(data.type + ":");
        var $desc = $("<td>").text(data.desc);
        $row.append($thing);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};
// let rider = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
createTable($riderData).addClass('riderTable').appendTo("#sections").css({"border-color": 'grey', "border-weight":"1px", "border-style":"solid", "text-align":"center"});
       
       let $riderHeader = $('<header>').addClass('id', 'riderHeader');
        $riderHeader.prependTo($('.riderTable')).text('Rider');
        
        
        $('#recording-image2').prependTo($('#list-recordings'));
        $('#recording-image').prependTo($('#top-rated'));
      
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


