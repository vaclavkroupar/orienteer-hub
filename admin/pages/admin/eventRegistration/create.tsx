import * as React from 'react'
import { CreateScope, LinkButton, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { EventRegistrationForm } from '../../../components/forms/EventRegistrationForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Create event registration
	</Title>
	<CreateScope entity="EventRegistration" redirectOnSuccess="admin/eventRegistration/detail(id: $entity.id)">
		<Slots.Actions>
			<LinkButton to="admin/clubMember/create">
				New Member
			</LinkButton>
			<PersistButton />
		</Slots.Actions>
		<Slots.Back>
			<NavigateBackLink to="admin/event/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.ContentStack>
			<EventRegistrationForm />
		</Slots.ContentStack>
	</CreateScope>
</>
