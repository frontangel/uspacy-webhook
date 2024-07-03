import { Box, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import YouTube from 'react-youtube';

function IntegrationInstructions() {
	const helpUrl = 'https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-web-hook';
	const videoId = 'RjQomY4YRWs';
	const playerStyles = {
		maxWidth: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '1rem',
	};
	return (
		<Box>
			<YouTube videoId={videoId} style={playerStyles} />
			<Box sx={{ marginBottom: 4 }}>
				<Typography gutterBottom variant="h5" component="div">
					КРОК 1 - підключення Uspacy до акаунту LeadBox
				</Typography>
				<Typography gutterBottom component="div">
					Зареєструйте акаунт в сервісі{' '}
					<Link href="https://my.leadbox.com.ua" target="_blank">
						my.leadbox.com.ua
					</Link>
					, якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку{' '}
					<Link href="https://my.leadbox.com.ua" target="_blank">
						Інтеграції
					</Link>
					.
				</Typography>
				<Typography component="div">Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:</Typography>
				<List>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ оберіть 'Додати інтеграцію'" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ оберіть розділ CRM" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ натисніть на Uspacy" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ введіть потрібну вам назву" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ скопіюте отриманий Api ключ" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="→ вставте ключ в форму вище і натисніть [Підключити]" />
					</ListItem>
				</List>
			</Box>

			<Box>
				<Typography gutterBottom variant="h5" component="div">
					КРОК 2 - підключення інтеграції Webhook
				</Typography>
				<List>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="Зайдіть на сторінку інтеграції в LeadBox" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="Натисніть 'Додати інтеграцію' та оберіть з переліку Web сайт → Webhook" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="Дайте назву інтеграції" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									Заповніть налаштування згідно з інструкцією:{' '}
									<Link href={helpUrl} target="_blank">
										інструкцією
									</Link>
									.
								</>
							}
						/>
					</ListItem>
				</List>
			</Box>

			<Box sx={{ marginTop: 4 }}>
				<Typography variant="body1" component="div">
					Якщо у вас виникнуть питання - пишіть нам в чат тех.підтримки у вашому акаунті{' '}
					<Link href="https://my.leadbox.com.ua" target="_blank">
						my.leadbox.com.ua
					</Link>{' '}
					або на пошту <Link href="mailto:office@leadbox.com.ua">office@leadbox.com.ua</Link> або дзвоніть +380933164008.
				</Typography>
			</Box>
		</Box>
	);
}

export default IntegrationInstructions;
