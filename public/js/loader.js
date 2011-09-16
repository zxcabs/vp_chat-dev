/*
 * loader.js
 */

(function (global, scope) {
	var window = global
		//get current chat settings
		, setting = {
			  defaultChannel: global.chat_channel
			, channelList: global.chat_channels_keys
			, pollFreq: global.chat_poll_freq
			, scrollEnabled: global.chat_scroll_enabled
		}
		;
	
	function empty() {};
	
	//kill old chat code
	global.chat_drop_req();
	delete global.message_buffer;
	delete global.message_buffer_length;
	delete global.chat_channel;
	delete global.chat_tm_id;	
	delete global.chat_scroll_enabled;
	delete global.chat_xhr;
	delete global.chat_channels_keys;
	delete global.chat_poll_freq;
	
	global.Insert2Buffer = empty;
	global.CheckMessage = empty;
	global.SendClick = empty;
	global.chat_drop_req = empty;
	global.chat_scroll = empty;
	global.chat_poll = empty;
	global.chat_send = empty;
	global.chat_toggle = empty;
	global.chat_replyTo = empty;
	global.chat_make_shortcuts = empty;
	global.chat_scrolling_enable = empty;
	global.chat_setup_scrolling = empty;
	
	
	//include chat
	scope.includeJS('/chat/js/chat.js', function (err) {
		if (err) {
			console.error(err);
		} else {
			console.log('All file chat load');
			//we can create chat;
			global.chat = new Chat(setting);
				
			//binding chat method to old function
			global.chat_toggle = chat.activateChannel.bind(chat);
			global.SendClick = chat.sendClick.bind(chat);
		}
	});

}(this, CHAT_VD));