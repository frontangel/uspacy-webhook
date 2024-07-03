import { Card, CardContent, Container, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
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
		<Container maxWidth="md">
			<YouTube videoId={videoId} style={playerStyles} />
			<Card variant="outlined" sx={{ marginBottom: 4 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						КРОК 1 - підключення Uspacy до акаунту LeadBox
					</Typography>
					<Typography variant="body1" component="div">
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
					<List>
						<ListItem>
							<ListItemText primary="Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:" />
						</ListItem>
						<ListItem>
							<ListItemText primary="→ оберіть 'Додати інтеграцію'" />
						</ListItem>
						<ListItem>
							<ListItemText primary="→ оберіть розділ CRM" />
						</ListItem>
						<ListItem>
							<ListItemText primary="→ натисніть на Uspacy" />
						</ListItem>
						<ListItem>
							<ListItemText primary="→ введіть потрібну вам назву" />
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Заповніть поле Api key, яке ви бачите вище даними із Secret Key,
								який ви отримаєте на сторінці інтeграції Uspacy в сервісі LeadBox"
							/>
						</ListItem>
						<ListItem>
							<ListItemText primary="Натисніть [Підключити]" />
						</ListItem>
					</List>
				</CardContent>
			</Card>

			<Card variant="outlined">
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						КРОК 2 - підключення інтеграції Webhook
					</Typography>
					<List>
						<ListItem>
							<ListItemText primary="Зайдіть на сторінку інтеграції в LeadBox" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Натисніть 'Додати інтеграцію' та оберіть з переліку Web сайт → Webhook" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Дайте назву інтеграції" />
						</ListItem>
						<ListItem>
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
				</CardContent>
			</Card>

			<Card variant="outlined" sx={{ marginTop: 4 }}>
				<CardContent>
					<Typography variant="body1" component="div">
						Якщо у вас виникнуть питання - пишіть нам в чат тех.підтримки у вашому акаунті{' '}
						<Link href="https://my.leadbox.com.ua" target="_blank">
							my.leadbox.com.ua
						</Link>{' '}
						або на пошту <Link href="mailto:office@leadbox.com.ua">office@leadbox.com.ua</Link> або дзвоніть +380933164008.
					</Typography>
				</CardContent>
			</Card>
		</Container>
	);
}

export default IntegrationInstructions;
