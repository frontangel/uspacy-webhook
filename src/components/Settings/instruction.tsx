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
	const btnStyle = {
		color: 'purple',
		border: '1px solid purple',
		display: 'inline-flex',
		padding: '0.25rem 1rem',
		borderRadius: '3px',
		marginLeft: '0.5rem',
		letterSpacing: '1px',
		fontSize: '14px',
	};
	return (
		<Box>
			<YouTube videoId={videoId} style={playerStyles} />
			<Box sx={{ marginBottom: 6 }}>
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
						<ListItemText primary="➡️ оберіть 'Додати інтеграцію'" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ оберіть розділ <span style={{ color: 'purple' }}>CRM</span>
								</>
							}
						/>
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ натисніть <span style={{ color: 'purple' }}>Uspacy</span>
								</>
							}
						/>
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="➡️ введіть потрібну вам назву" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ скопіюте отриманий <span style={{ color: 'purple' }}>Api ключ</span>
								</>
							}
						/>
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ вставте ключ в форму вище і натисніть
									<span style={btnStyle}>Підключити</span>
								</>
							}
						/>
					</ListItem>
				</List>
			</Box>

			<Box>
				<Typography gutterBottom variant="h5" component="div">
					КРОК 2 - підключення інтеграції Webhook
				</Typography>
				<List>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ зайдіть на сторінку інтеграції в <span style={{ color: 'purple' }}>LeadBox</span>
								</>
							}
						/>
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ натисніть <span style={{ color: 'purple' }}>Додати інтеграцію</span> та оберіть з переліку{' '}
									<span style={{ color: 'purple' }}>Web сайт → Webhook</span>
								</>
							}
						/>
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText primary="➡️ Дайте назву інтеграції" />
					</ListItem>
					<ListItem sx={{ paddingY: 0 }}>
						<ListItemText
							primary={
								<>
									➡️ Заповніть налаштування згідно з цією{' '}
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
				<Typography component="div">
					Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримки у вашому акаунті{' '}
					<Link href="https://my.leadbox.com.ua" target="_blank">
						my.leadbox.com.ua
					</Link>{' '}
					або:
				</Typography>
				<Typography component="div">
					✉️ <Link href="mailto:office@leadbox.com.ua">office@leadbox.com.ua</Link>
				</Typography>
				<Typography component="div">
					📱 <Link href="tel:+380933164008">+38 (093) 316-40-08</Link>
				</Typography>
			</Box>
		</Box>
	);
}

export default IntegrationInstructions;
