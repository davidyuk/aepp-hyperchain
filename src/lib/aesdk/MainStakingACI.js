export default [
	{ namespace: { name: 'ListInternal', typedefs: [] } },
	{ namespace: { name: 'List', typedefs: [] } },
	{
		contract: {
			functions: [
				{
					arguments: [
						{ name: '_1', type: 'address' },
						{ name: '_2', type: 'int' }
					],
					name: 'init',
					payable: false,
					returns: 'unit',
					stateful: false
				},
				{
					arguments: [{ name: '_1', type: 'address' }],
					name: 'stake',
					payable: true,
					returns: 'int',
					stateful: true
				},
				{
					arguments: [],
					name: 'profit',
					payable: true,
					returns: 'unit',
					stateful: false
				},
				{
					arguments: [],
					name: 'distribute_unstake',
					payable: false,
					returns: 'unit',
					stateful: true
				},
				{
					arguments: [
						{ name: '_1', type: 'address' },
						{ name: '_2', type: 'int' }
					],
					name: 'unstake',
					payable: false,
					returns: 'int',
					stateful: true
				},
				{
					arguments: [],
					name: 'get_state',
					payable: false,
					returns: 'StakingValidator.validator_state',
					stateful: false
				},
				{
					arguments: [{ name: '_1', type: 'address' }],
					name: 'balance',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [{ name: '_1', type: 'address' }],
					name: 'shares',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [],
					name: 'all_shares',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [{ name: '_1', type: 'int' }],
					name: 'estimate_stake_shares',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [{ name: '_1', type: 'string' }],
					name: 'set_name',
					payable: false,
					returns: 'unit',
					stateful: true
				},
				{
					arguments: [{ name: '_1', type: 'string' }],
					name: 'set_description',
					payable: false,
					returns: 'unit',
					stateful: true
				},
				{
					arguments: [{ name: '_1', type: 'string' }],
					name: 'set_avatar_url',
					payable: false,
					returns: 'unit',
					stateful: true
				}
			],
			kind: 'contract_interface',
			name: 'StakingValidator',
			payable: false,
			typedefs: [
				{
					name: 'validator_pending_transfer',
					typedef: {
						record: [
							{ name: 'staker', type: 'address' },
							{ name: 'stake', type: 'int' }
						]
					},
					vars: []
				},
				{
					name: 'validator_state',
					typedef: {
						record: [
							{ name: 'main_staking_ct', type: 'address' },
							{ name: 'unstake_delay', type: 'int' },
							{ name: 'pending_unstake_amount', type: 'int' },
							{
								name: 'pending_unstake',
								type: {
									map: ['int', { list: ['StakingValidator.validator_pending_transfer'] }]
								}
							},
							{ name: 'name', type: 'string' },
							{ name: 'description', type: 'string' },
							{ name: 'image_url', type: 'string' },
							{ name: 'delegates', type: { map: ['address', 'int'] } },
							{ name: 'shares', type: 'int' }
						]
					},
					vars: []
				}
			]
		}
	},
	{
		contract: {
			functions: [
				{
					arguments: [
						{ name: 'staking_validator_ct', type: 'StakingValidator' },
						{ name: 'validator_min_stake', type: 'int' },
						{ name: 'validator_min_percent', type: 'int' },
						{ name: 'stake_minimum', type: 'int' },
						{ name: 'online_delay', type: 'int' },
						{ name: 'stake_delay', type: 'int' },
						{ name: 'unstake_delay', type: 'int' }
					],
					name: 'init',
					payable: false,
					returns: 'MainStaking.state',
					stateful: false
				},
				{
					arguments: [],
					name: 'online_validators',
					payable: false,
					returns: { list: [{ tuple: ['address', 'int'] }] },
					stateful: false
				},
				{
					arguments: [],
					name: 'offline_validators',
					payable: false,
					returns: { list: [{ tuple: ['address', 'int'] }] },
					stateful: false
				},
				{
					arguments: [],
					name: 'total_stake',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [],
					name: 'new_validator',
					payable: true,
					returns: 'StakingValidator',
					stateful: true
				},
				{
					arguments: [],
					name: 'set_online',
					payable: false,
					returns: { tuple: [] },
					stateful: true
				},
				{
					arguments: [],
					name: 'set_offline',
					payable: false,
					returns: { tuple: [] },
					stateful: true
				},
				{
					arguments: [{ name: 'to', type: 'address' }],
					name: 'stake',
					payable: true,
					returns: 'MainStaking.staking_response',
					stateful: true
				},
				{
					arguments: [
						{ name: 'from', type: 'address' },
						{ name: 'stakes', type: 'int' }
					],
					name: 'unstake',
					payable: false,
					returns: 'MainStaking.staking_response',
					stateful: true
				},
				{
					arguments: [{ name: 'to', type: 'address' }],
					name: 'reward',
					payable: true,
					returns: { tuple: [] },
					stateful: true
				},
				{
					arguments: [{ name: 'address', type: 'address' }],
					name: 'get_validator_state',
					payable: false,
					returns: 'MainStaking.get_validator_response',
					stateful: false
				},
				{
					arguments: [],
					name: 'get_state',
					payable: false,
					returns: 'MainStaking.get_state_response',
					stateful: false
				},
				{
					arguments: [{ name: 'name', type: 'string' }],
					name: 'set_validator_name',
					payable: false,
					returns: { tuple: [] },
					stateful: false
				},
				{
					arguments: [{ name: 'description', type: 'string' }],
					name: 'set_validator_description',
					payable: false,
					returns: { tuple: [] },
					stateful: false
				},
				{
					arguments: [{ name: 'avatar_url', type: 'string' }],
					name: 'set_validator_avatar_url',
					payable: false,
					returns: { tuple: [] },
					stateful: false
				},
				{
					arguments: [],
					name: 'post_elect',
					payable: false,
					returns: { tuple: [] },
					stateful: true
				},
				{
					arguments: [],
					name: 'sorted_validators',
					payable: false,
					returns: { list: [{ tuple: ['address', 'int'] }] },
					stateful: false
				},
				{
					arguments: [{ name: 'who', type: 'address' }],
					name: 'staking_power',
					payable: false,
					returns: 'int',
					stateful: false
				},
				{
					arguments: [{ name: 'who', type: 'address' }],
					name: 'is_validator_online',
					payable: false,
					returns: 'bool',
					stateful: false
				},
				{
					arguments: [{ name: 'who', type: 'address' }],
					name: 'get_validator_contract',
					payable: false,
					returns: 'StakingValidator',
					stateful: false
				}
			],
			kind: 'contract_main',
			name: 'MainStaking',
			payable: false,
			state: {
				record: [
					{ name: 'staking_validator_ct', type: 'StakingValidator' },
					{ name: 'genesis_height', type: 'int' },
					{
						name: 'online_validators',
						type: { map: ['address', 'MainStaking.validator'] }
					},
					{
						name: 'offline_validators',
						type: { map: ['address', 'MainStaking.validator'] }
					},
					{ name: 'total_stake', type: 'int' },
					{ name: 'validator_min_stake', type: 'int' },
					{ name: 'validator_min_percent', type: 'int' },
					{ name: 'stake_minimum', type: 'int' },
					{ name: 'online_delay', type: 'int' },
					{ name: 'stake_delay', type: 'int' },
					{ name: 'unstake_delay', type: 'int' },
					{
						name: 'pending_stake',
						type: {
							map: ['int', { list: ['MainStaking.pending_transfer'] }]
						}
					},
					{
						name: 'pending_unstake',
						type: { map: ['int', { list: ['address'] }] }
					}
				]
			},
			typedefs: [
				{
					name: 'bucket',
					typedef: { variant: [{ ONLINE: [] }, { OFFLINE: [] }] },
					vars: []
				},
				{
					name: 'pending_transfer',
					typedef: {
						record: [
							{ name: 'validator', type: 'address' },
							{ name: 'staker', type: 'address' },
							{ name: 'stake', type: 'int' }
						]
					},
					vars: []
				},
				{
					name: 'validator',
					typedef: {
						record: [
							{ name: 'ct', type: 'StakingValidator' },
							{ name: 'creation_height', type: 'int' },
							{ name: 'stake', type: 'int' },
							{ name: 'pending_stake', type: 'int' },
							{ name: 'stake_limit', type: 'int' }
						]
					},
					vars: []
				},
				{
					name: 'staking_response',
					typedef: {
						record: [
							{ name: 'stake', type: 'int' },
							{ name: 'shares', type: 'int' },
							{ name: 'execution_height', type: 'int' }
						]
					},
					vars: []
				},
				{
					name: 'get_validator_response',
					typedef: {
						record: [
							{ name: 'ct', type: 'StakingValidator' },
							{ name: 'address', type: 'address' },
							{ name: 'creation_height', type: 'int' },
							{ name: 'stake', type: 'int' },
							{ name: 'pending_stake', type: 'int' },
							{ name: 'stake_limit', type: 'int' },
							{ name: 'is_online', type: 'bool' },
							{ name: 'state', type: 'StakingValidator.validator_state' }
						]
					},
					vars: []
				},
				{
					name: 'get_state_response',
					typedef: {
						record: [
							{ name: 'staking_validator_ct', type: 'StakingValidator' },
							{
								name: 'validators',
								type: { list: ['MainStaking.get_validator_response'] }
							},
							{ name: 'total_stake', type: 'int' },
							{ name: 'validator_min_stake', type: 'int' },
							{ name: 'validator_min_percent', type: 'int' },
							{ name: 'stake_minimum', type: 'int' },
							{ name: 'online_delay', type: 'int' },
							{ name: 'stake_delay', type: 'int' },
							{ name: 'unstake_delay', type: 'int' }
						]
					},
					vars: []
				}
			]
		}
	}
];
