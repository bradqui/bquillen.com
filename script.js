var speed = "slow";

function toggleSection(type)
{
    if (type != 'all')
    {
        if ($(type).next('section').is(':hidden'))
        {
            $(type).next('section').slideDown(speed);
            $('span:first', type).text("-");
        }
        else
        {
            $(type).next('section').slideUp(speed);
            $('span:first', type).text("+");
        }
    }
}
function expandAll()
{
    $('div.section').each(function() {
        $(this).next('section').slideDown(speed);
        $('span:first', this).text("-");
    });
}
function collapseAll()
{
    $('div.section').each(function() {
        $(this).next('section').slideUp(speed);
        $('span:first', this).text("+");
    });
}

$(document).ready(function() {
        $('div.section').click(function() {
            toggleSection(this);
        });
        toggleSection($('div.section:first'));
        
        $("[rel='tooltip']").hover(function(){ 
            $('.tooltip').remove();
            $(this).css('position','relative');
            var toolTiptext = $(this).attr("data-tooltip");
            $(this).append("<div class='tooltip'>"+toolTiptext +"</div><div class='tooltip ttchild'>&nbsp;</div>");          
            }, function(){
            $(this).css('position','');
            $('.tooltip').remove();
        });
});
