	const Bot_function = {
		send_message: function(text,bot_mes_number,insert_html,sender_type) 
		{
			let message = document.createElement('div');
			let container = document.createElement('a');
			container.innerText = text;
			message.appendChild(container);
			if (sender_type == 0) 
			{
				message.classList.add('bot_message');
			}
			else
			{
				message.classList.add('user_message');
			}
			message.setAttribute('data_mess_id', bot_mes_number);
			if (insert_html !== 0) 
			{
				message.innerHTML += insert_html;
			}
			this.add_message(message);
			if (sender_type == 1) 
			{
				this.user_msg_analysis(text);
			}
		},
		show_functions: function()
		{
			let message = document.createElement('div');
			let container = document.createElement('a');
			message.classList.add('bot_message');
			message.setAttribute('data_mess_id', 2);
			for (let i = 0; i < default_function_mes.length; i++) 
			{
				const property = default_function_mes[i];
				let button = document.createElement('button');
				button.innerText = property.btn_name;
				button.onclick = property.btn_function;
				container.appendChild(button);
			}
			message.appendChild(container);
			this.add_message(message);
		},
		add_message: function(object)
		{
			let chat_area = document.querySelector('.chat_area');
			chat_area.appendChild(object);
			chat_area.scrollTop = chat_area.scrollHeight - chat_area.clientHeight;
		},
		user_msg_analysis: function (text)
		{
			let insert_html = 0;

			if ((text.toLowerCase().includes('осмотр') || text.toLowerCase().includes('консул')) && ((text.toLowerCase().includes('подолог') || text.toLowerCase().includes('подиат')) || text.toLowerCase().includes('необходим') || text.toLowerCase().includes('нужн') || text.toLowerCase().includes('хочу'))) 
			{
				Schedule_of_doctors.btn_function();
			}
			else if (text.toLowerCase().includes('осмотр'))
			{
				Schedule_of_doctors.btn_function();
			}
			else if (text.toLowerCase().includes('врос') && text.toLowerCase().includes('ногот'))
			{
				Clinic_opening_hours.btn_function();
				//insert_html = '0'; 
				//this.send_message('У вас проблема с вросшим ногтем? Ознакомьтесь с услугой "Решение проблемы с вросшим ногтем"',666,insert_html,0);
			}
			else if (text.toLowerCase().includes('бородав'))
			{
				Wart_treatment.btn_function();
			}
			else if (text.toLowerCase().includes('мозол'))
			{
				Callus_treatment.btn_function();
			}
			else if (text.toLowerCase().includes('натопт') || (text.toLowerCase().includes('трещ') && (text.toLowerCase().includes('ног') || text.toLowerCase().includes('стоп') || text.toLowerCase().includes('пальц'))))
			{
				Cracks_and_corns.btn_function();
			}
			else if (text.toLowerCase().includes('натопт'))
			{
				Cracks_and_corns.btn_function();
			}
			else if ((text.toLowerCase().includes('гриб') || text.toLowerCase().includes('онихо')) && (text.toLowerCase().includes('ного') || text.toLowerCase().includes('зачист')))
			{
				Fungus_treatment.btn_function();
			}
			else if (text.toLowerCase().includes('гриб'))
			{
				Fungus_treatment.btn_function();
			}
			else if ((text.toLowerCase().includes('протез') || text.toLowerCase().includes('слом') || text.toLowerCase().includes('повред') || text.toLowerCase().includes('востанов') || text.toLowerCase().includes('восстав')) && text.toLowerCase().includes('ного'))
			{
				Nail_prosthetics.btn_function();
			}
			else if ((text.toLowerCase().includes('деформ') || text.toLowerCase().includes('скру') || text.toLowerCase().includes('тресн') || text.toLowerCase().includes('коррект') || text.toLowerCase().includes('корект')) && text.toLowerCase().includes('ного'))
			{
				Correction_deformed_nails.btn_function();
			}
			else if ((text.toLowerCase().includes('педикюр') || text.toLowerCase().includes('аппарт') || text.toLowerCase().includes('обработ') || text.toLowerCase().includes('профилакт')) && (text.toLowerCase().includes('стоп') || text.toLowerCase().includes('ног')))
			{
				Podological_pedicure.btn_function();
			}
			else if (text.toLowerCase().includes('маник') || ((text.toLowerCase().includes('гель') || text.toLowerCase().includes('лак')) && text.toLowerCase().includes('снят')) || (text.toLowerCase().includes('стрич') && text.toLowerCase().includes('ног')))
			{
				Manicure.btn_function();
			}
			else if ((text.toLowerCase().includes('цен') && !text.toLowerCase().includes('цент')) || text.toLowerCase().includes('услуг') || text.toLowerCase().includes('стоимо') || text.toLowerCase().includes('прайс') || text.toLowerCase().includes('прейс') || (text.toLowerCase().includes('стоит') && text.toLowerCase().includes('скольк')))
			{
				Price.btn_function();
			}
			else if (text.toLowerCase().includes('звони') || text.toLowerCase().includes('номер') || text.toLowerCase().includes('телефо') || text.toLowerCase().includes('контакт') || text.toLowerCase().includes('адрес') || text.toLowerCase().includes('находит'))
			{
				Contacts.btn_function();
			}
			else if (text.toLowerCase().includes('умееш') || text.toLowerCase().includes('можеш') || text.toLowerCase().includes('поможеш'))
			{
				this.send_message('Я могу посоветовать Вам услугу или же ответить на следующие вопросы:',566,0,0);
				this.show_functions();
			}
			else if (text.toLowerCase().includes('привет') || text.toLowerCase().includes('здравствуй'))
			{
				this.send_message('Здравствуйте. Задайте мне вопрос, а я постараюсь Вам на него ответить.',666,0,0);
			}
			else
			{
				this.send_message('Я Вас не понимаю, простите. Вот чем я могу Вам помочь на данный момент:',566,0,0);
				this.show_functions();
			}
		}
	}

	const default_bot_mes = [0,1];

	const bot_mes = {
		0:'Здравствуйте, я Ваш консультант и помошник по навигации. Можете задать свой вопрос, а я постараюсь на него ответить.',
		1:'Вот что я могу Вам подсказать:'
	}

	const How_to_get_to_the_clinic = {
		btn_name:'Как до нас добраться?',
		btn_function: function()
		{
			let message_id = 3;
			let message = 'Центр подологии и педикюра находится по адресу г. Курск, ул. Московский проезд, 4. Ниже представлено расположение центра на карте.';
			let insert_html = '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/8/kursk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Курск</a><a href="https://yandex.ru/maps/8/kursk/?ll=36.195624%2C51.744571&mode=usermaps&source=constructorLink&um=constructor%3A72a624c42415661303b0d97e2893f6e7eb0542d25ac8122b4e2ba8aa4ba5b79b&utm_medium=mapframe&utm_source=maps&z=15" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.ru/map-widget/v1/?ll=36.195624%2C51.744571&mode=usermaps&source=constructorLink&um=constructor%3A72a624c42415661303b0d97e2893f6e7eb0542d25ac8122b4e2ba8aa4ba5b79b&z=15" width="400" height="300" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Contacts = {
		btn_name:'Контакты',
		btn_function: function()
		{
			let message_id = 4;
			let message = 'Центр подологии и педикюра находится по адресу г. Курск, ул. Московский проезд, 4. Контакты центра:';
			let insert_html = '<div><a class="dop_btn" href="tel:+79103151820">+79103151820</a>';
			insert_html += '<a class="dop_btn" href="https://t.me/podolog_v_kurske">Телеграм</a><a class="dop_btn" href="https://vk.com/podolog_v_kurske">ВКонтакте</a>';
			insert_html += '<a class="dop_btn" href="https://wa.me/79103151820">WhatsApp</a>';
			insert_html += '<a class="dop_btn" href="https://www.instagram.com/podolog_v_kurske/">Instagram</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const How_to_make_an_appointment = {
		btn_name:'Как записаться на приём?',
		btn_function: function()
		{
			let message_id = 4;
			let message = 'Запись на приём в центр подологии и педикюра можно несколькими способами: онлайн через сайт; звонок по телефону +79103151820; соцсети и мессанджеры.';
			let insert_html = '<div><a class="dop_btn" href="?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot#popup:myform">Записаться онлайн</a><a class="dop_btn" href="tel:+79103151820">&#9742; Позвонить</a>';
			insert_html += '<a class="dop_btn" href="https://t.me/podolog_v_kurske">Телеграм</a><a class="dop_btn" href="https://vk.com/podolog_v_kurske">ВКонтакте</a>';
			insert_html += '<a class="dop_btn" href="https://wa.me/79103151820">WhatsApp</a><a class="dop_btn" href="https://www.instagram.com/podolog_v_kurske/">Instagram</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const What_documents_do_you_need_to_take_with_you = {
		btn_name:'Как подготовиться к приёму подолога?',
		btn_function: function()
		{
			let message_id = 5;
			let message = 'Перед визитом к подологу нельзя: \n- срезать или спиливать ногти \n- самостоятельно выполнять педикюр с обработкой кутикулы и кожи вокруг валиков';
			message += '\n- применять механические абразивные инструменты, такие как пилки, щетки и терки';
			message += '\n- наносить препараты с противомикозным действием, особенно если наблюдаете у себя видоизменение ногтевых пластин';
			message += '\n- покрывать ногти декоративными покрытиями';
			message += '\n Соблюдение этих простых правил поможет нам правильно диагностировать паталогию и дать Вам правильные рекомендации.';
			let insert_html = 0;
			Bot_function.send_message(message,message_id,insert_html,0);
		}	
	};
	const Clinic_opening_hours = {
		btn_name:'Решение проблемы с вросшим ногтем',
		btn_function: function()
		{
			let message_id = 6;
			let message = 'У вас проблема с вросшим ногтем? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/ingrown_nail?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Решение проблемы с вросшим ногтем</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Schedule_of_doctors = {
		btn_name:'Осмотр и консультация подолога',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'Вам необходим осмотр или консультация подолога? Ознакомьтесь с данной услугой по ссылке ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/consultation?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Осмотр и консультация подолога</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Wart_treatment = {
		btn_name:'Работа с бородавками',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'У вас проблема с бородавкой? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/wart_treatment?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Работа с бородавками</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Callus_treatment = {
		btn_name:'Обработка мозоли',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'У вас проблема с мозолью? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/callus_treatment?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Обработка мозоли</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Cracks_and_corns = {
		btn_name:'Обработка трещин и натоптышей',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'У вас проблема с трещиной или натоптышем? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/treatment_cracks_and_corns?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Обработка трещин и натоптышей</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Fungus_treatment = {
		btn_name:'Зачистка грибка ногтей',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'У вас проблема с грибком ногтей (онихомикоз)? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/fungus_treatment?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Зачистка онихомикоза(грибка ногтей)</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Nail_prosthetics = {
		btn_name:'Протезирование ногтей',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'У вас повреждены ногти и они нуждаются в восстановлении или протезировании? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/nail_prosthetics?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Протезирование ногтей</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Correction_deformed_nails = {
		btn_name:'Коррекция деформированных ногтей',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'Вам необходима коректировка или выпрямление ногтя? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/correction_deformed_nails?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Коррекция деформированных ногтей</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Podological_pedicure = {
		btn_name:'одологический педикюр (аппаратный)',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'Вам необходим подологический (аппаратный) педикюр? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/podological_pedicure?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Подологический педикюр (аппаратный)</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Manicure = {
		btn_name:'Маникюр проблемных ногтей',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'Вам необходим маникюр проблемных ногтей? Ознакомьтесь с услугой ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/manicure?utm_source=rnd&utm_medium=nav_bot&utm_campaign=nav_bot">Маникюр проблемных ногтей</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};
	const Price = {
		btn_name:'Цены',
		btn_function: function()
		{
			let message_id = 7;
			let message = 'С ценами и услугами вы можете ознакомиться по ссылке ниже:';
			let insert_html = '<div><a class="dop_btn" href="https://podolog-kursk.ru/#rec692329585">Все услуги</a></div>';
			Bot_function.send_message(message,message_id,insert_html,0);
		}
	};

	const default_function_mes = [How_to_get_to_the_clinic,How_to_make_an_appointment,What_documents_do_you_need_to_take_with_you];

	const user_messages = {
		btn_function: function()
		{
			let message_area = document.querySelector('.user_text textarea')
			let message = message_area.value;
			if (message.trim().replace(/\s+/g, '').length == 0) 
			{
				return;
			}
			message_area.value = '';
			let message_id = document.querySelectorAll('.user_message').length;
			Bot_function.send_message(message,message_id,0,1);
		}
	};
	document.addEventListener("DOMContentLoaded", function()
	{
		CreateStyleSheets();
		CreateElementsInPage();


		for (let i = 0; i < default_bot_mes.length; i++) 
		{
			const property = default_bot_mes[i];
			Bot_function.send_message(bot_mes[property], property, 0, 0);
		}
		Bot_function.show_functions();
		document.querySelector('.send_btn button').onclick = user_messages.btn_function;

		const input = document.querySelector('.user_text textarea');

		input.addEventListener('keydown', function(event) {
		  if (event.keyCode === 13) {
		  	event.preventDefault();
		    user_messages.btn_function();
		  }
		});

		const chat_ico = document.querySelector('.Chat_ico').onclick = ToggleBot;
		const chat_btn_exit = document.querySelector('.bot_header button').onclick = ToggleBot;
	});
	function ToggleBot()
	{
		let ico = document.querySelector('.Chat_ico');
		let chat = document.querySelector('.bot_area');

		if (chat.classList.contains('hidden_element')) 
		{
			chat.classList.remove('hidden_element');
			ico.classList.add('hidden_element');
		}
		else
		{
			chat.classList.add('hidden_element');
			ico.classList.remove('hidden_element');
		}
	}
	function CreateStyleSheets() 
	{
	    var css = '.Chat_ico {position: fixed; bottom: 20px; right: 55px; width: 60px; height: 60px; background-color: #007aff;';
		css += 'border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 9999;}';
		css += '.Ico_circle {width: 30px; height: 30px; background-size: contain; background-repeat: no-repeat; background: white; border-radius: 30px;} '; 
		css += '.Chat_ico_box {box-shadow: 0 0 0 #1fd932; animation: shadow-rotate 3s infinite linear;} ';
		css += '@keyframes shadow-rotate {0%{box-shadow: -7px 0 7px #1fd932;}25% {box-shadow: 0 -7px 7px #1fd932;}50% {box-shadow: 7px 0 7px #1fd932;}75% {box-shadow: 0 7px 7px #1fd932;}100% {box-shadow: -7px 0 7px #1fd932;}}';
		css += ".bot_area { font-family: Arial; box-shadow: rgb(0 0 0) 0px 0px 8px 4px; z-index: 9999; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; align-items: center; align-content: center; background: #cecece; position: absolute; }";
		css += "@media screen and (max-width: 767px) { .bot_area { right: 0; bottom: 0; position: fixed; width: 100%; height: 80%; } }";
		css += "@media screen and (min-width: 768px) { .bot_area { right: 0; position: fixed; bottom: 0; width: 25%; height: 60%; } }";
		css += ".bot_header { background: rgb(44, 154, 249); height: 5%; width: -webkit-fill-available; width: -moz-available; display: flex; flex-direction: row; flex-wrap: nowrap; align-content: flex-start; justify-content: space-between; align-items: flex-start; }";
		css += ".bot_header button { width: 8%; background: #d8dddb; font-size: 16px; padding: 0px 3px 0px 3px!important; font-size: 0.6em; line-height:unset; border: 1px solid; height: -webkit-fill-available; height: -moz-available; }";
		css += ".chat_area { padding-bottom: 5px; height: 70%; overflow: auto; }";
		css += ".chat_area a { color:black!important; padding: 5px; margin: 2px; border: 1px solid gray; margin-bottom: 1px; display: inline-block; }";
		css += ".chat_area div iframe { width: -webkit-fill-available; width: -moz-available; }";
		css += ".bot_message { text-align: left; }";
		css += ".bot_message a { background: white; }";
		css += ".bot_message a button { font-size: 1em; border-radius: 7px; border: 1px solid lightgray; background: #72c3f9; }";
		css += ".user_message { text-align: right; }";
		css += ".user_message a { background: #fdff96; }";
		css += ".user_area { display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: center; align-items: center; height: 25%; }";
		css += ".user_text { left: 0; position: absolute; height: -webkit-fill-available; height: -moz-available; width: 80%; }";
		css += ".user_text textarea { padding: 0; height: 99%!important; height: -webkit-fill-available; width: -webkit-fill-available; resize: none; }";
		css += ".send_btn { height: -webkit-fill-available; height: -moz-available; right: 0; position: absolute; width: 20%; }";
		css += ".send_btn button { padding: 3px 3px 3px 3px!important; height: -webkit-fill-available; height: -moz-available; width: -webkit-fill-available; width: -moz-available; border: none; cursor: pointer; background: #58f946; font-size: 2.5em; }";
		css += ".bot_name { color: black; font-weight: bold;}";
		css += ".hidden_element { display: none !important; }";
		css += ".bot_message a.dop_btn { background: rgb(114, 195, 249);!important; border: none; border-radius: 5px; display: block; text-align: center;}";

	    var style = document.createElement('style');
	    style.type = 'text/css';
	    if (style.styleSheet) {
	        // для Internet Explorer
	        style.styleSheet.cssText = css;
	    } else {
	        style.appendChild(document.createTextNode(css));
	    }

	    document.getElementsByTagName('head')[0].appendChild(style);
	}
	function CreateElementsInPage()
	{
		let HiddenChatIco = document.createElement("div");
		HiddenChatIco.classList.add('Chat_ico');
		HiddenChatIco.classList.add('Chat_ico_box');

		let IcoCircle = document.createElement("span");
		IcoCircle.classList.add('Ico_circle');

		HiddenChatIco.appendChild(IcoCircle);
		document.querySelector('body').appendChild(HiddenChatIco);

		const botArea = document.createElement("div");
		botArea.classList.add("bot_area", "hidden_element");

		const botHeader = document.createElement("div");
		botHeader.classList.add("bot_header");

		const div1 = document.createElement("div");
		div1.innerHTML = "&nbsp;";

		const botName = document.createElement("div");
		botName.classList.add("bot_name");
		botName.textContent = "Навигатор";

		const closeButton = document.createElement("button");
		closeButton.textContent = "❌";
		/*closeButton.addEventListener("click", function() {
		  botArea.classList.add("hidden_element");
		});
		*/

		botHeader.appendChild(div1);
		botHeader.appendChild(botName);
		botHeader.appendChild(closeButton);

		const chatArea = document.createElement("div");
		chatArea.classList.add("chat_area");

		const userArea = document.createElement("div");
		userArea.classList.add("user_area");

		const userText = document.createElement("div");
		userText.classList.add("user_text");

		const textarea = document.createElement("textarea");
		textarea.setAttribute("placeholder", "Напишите сообщение...");
		userText.appendChild(textarea);

		const sendButton = document.createElement("div");
		sendButton.classList.add("send_btn");

		const button = document.createElement("button");
		//button.textContent = "&#9993;";
		button.innerHTML += "&#9993;";

		sendButton.appendChild(button);
		userArea.appendChild(userText);
		userArea.appendChild(sendButton);

		botArea.appendChild(botHeader);
		botArea.appendChild(chatArea);
		botArea.appendChild(userArea);

		document.body.appendChild(botArea);
		
	}
	function CreateBot()
	{
		CreateStyleSheets();
		CreateElementsInPage();


		for (let i = 0; i < default_bot_mes.length; i++) 
		{
			const property = default_bot_mes[i];
			Bot_function.send_message(bot_mes[property], property, 0, 0);
		}
		Bot_function.show_functions();
		document.querySelector('.send_btn button').onclick = user_messages.btn_function;

		const input = document.querySelector('.user_text textarea');

		input.addEventListener('keydown', function(event) {
		  if (event.keyCode === 13) {
		  	event.preventDefault();
		    user_messages.btn_function();
		  }
		});

		document.querySelector('.Chat_ico').onclick = ToggleBot;
		document.querySelector('.bot_header button').onclick = ToggleBot;
	}
	CreateBot();