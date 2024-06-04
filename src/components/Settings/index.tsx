import { Box, Button, CircularProgress, Input, Typography } from '@mui/material';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { api } from '../../helpers/api';
import { ISettings } from '../../models/settings';
import Providers from '../../Providers';
import { IProps } from './types';

const Settings: React.FC = () => {
	const [settings, setSettings] = useState<ISettings>({ installed: false, apiKey: '', isConnected: false });
	const [loading, setLoading] = useState(false);
	const [isChanged, setChange] = useState(false);
	const [errorMessage, setError] = useState('');
	const { t } = useTranslation('settings');

	useEffect(() => {
		(async () => {
			api.get<ISettings>('/settings')
				.then((response) => setSettings(response.data))
				.catch((err) => {
					// eslint-disable-next-line no-console
					console.log(err);
				});
		})();
	}, []);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		setLoading(true);
		api.post<ISettings>('/settings', { apiKey: settings.apiKey })
			.then((response) => {
				setSettings(response.data);
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
				setError(err.response.data.message || err.message);
			})
			.finally(() => {
				setLoading(false);
				setChange(false);
			});
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setError('');
		setSettings({ ...settings, apiKey: e.target.value });
		setChange(true);
	};

	const colorBadge = settings?.isConnected
		? {
				backgroundColor: '#d2f7b6',
				color: '#58ca00',
		  }
		: {
				backgroundColor: '#ffdada',
				color: '#f00',
		  };

	return (
		<Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
				<Typography
					sx={{
						...colorBadge,
						display: 'inline-flex',
						fontSize: '12px',
						letterSpacing: '1px',
						padding: '0.1rem 0.75rem',
						borderRadius: '1rem',
					}}
				>
					{settings?.isConnected ? t('connected') : t('notConnected')}
				</Typography>
			</Box>

			<Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingLeft: '1rem' }}>
				{t('LABEL_API_KEY')}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: '1rem',
				}}
				component={'form'}
				onSubmit={handleSubmit}
			>
				<Input
					sx={{
						width: '100%',
						border: '1px solid #ddd',
						outline: 'none',
						borderRadius: '4px',
						paddingLeft: '1rem',
						paddingRight: '1rem',
						'&:before': { content: 'none' },
						'&:after': { content: 'none' },
					}}
					disabled={loading}
					placeholder={t('integrationApiKey')}
					value={settings.apiKey || ''}
					onChange={handleChange}
				/>
				<Button
					disableElevation
					variant={!settings.apiKey?.trim() || !isChanged ? 'outlined' : 'contained'}
					type="submit"
					disabled={loading || !settings.apiKey?.trim() || !isChanged}
					sx={{
						backgroundColor: '#58ca00',
						border: '1px solid #58ca00',
						padding: '5px 2rem',
						textTransform: 'none',
						letterSpacing: '1px',
						'&:hover': { backgroundColor: '#58ca00' },
						'&:disabled': {
							backgroundColor: settings.apiKey?.trim() && isChanged ? '#d2f7b6' : 'transparent',
							color: '#58ca00',
							borderColor: '#58ca00',
						},
					}}
				>
					{t('connect')}
					{loading && (
						<CircularProgress
							size={22}
							sx={{
								color: '#58ca00',
								position: 'absolute',
								zIndex: 1,
							}}
						/>
					)}
				</Button>
			</Box>
			<Box sx={{ position: 'relative', height: '1rem', marginBottom: '1rem' }}>
				{errorMessage && (
					<Typography
						variant="subtitle2"
						sx={{ color: 'red', position: 'absolute', left: 0, top: 0, fontSize: '11px', paddingLeft: '1rem' }}
					>
						{t(errorMessage)}
					</Typography>
				)}
			</Box>
		</Box>
	);
};

const SettingsWrap: React.FC<IProps> = ({ userSettings }) => (
	<Providers userSettings={userSettings}>
		<Settings />
	</Providers>
);

export default SettingsWrap;
