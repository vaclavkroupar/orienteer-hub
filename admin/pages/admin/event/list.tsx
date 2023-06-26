import * as React from 'react'
import { BooleanCell, DataGridScope, DeleteEntityButton, EnumCell, GenericCell, Link, LinkButton, useRedirect, useRoutingLink } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'


const capitalize = (s: string) =>  s[0].toUpperCase() + s.slice(1)

export default () => {
	const redirect = useRedirect()

	// didn't find Entity type
	const handleOnEntityClick = (entity: any) => {
		const id = String(entity.id);
		console.log('just id ', id)
		// docs says it could work, in reality it does not.
		// Error during static render of EntitySubTree in generateEnvironment: Undefined variable $id.		
		// redirect('admin/event/detail', {id: entity.id})

		// Failed to tokenize 'admin/event/detail?id=42ff77c8-c1f2-4399-8c09-21d9a767c1a8'.
		// redirect(`admin/event/detail?id=${encodeURIComponent(entity.id)}`)

		const idParts = id.split('-').map(e => capitalize(e))
		// this couldn't work as numbers don't have capital letter
		console.log('just idParts', idParts.join())

		// just sanity check...
		// redirect(`admin/clubMember/list`)
	}
	return <>
		<Title>
			Events
		</Title>
		<Slots.Actions>
			<LinkButton to="admin/event/create">
				Create new event
			</LinkButton>
		</Slots.Actions>
		<Directive name="content-max-width" content={null} />
		<Slots.ContentStack>
			<DataGridScope entities="Event" itemsPerPage={50} onEntityClick={handleOnEntityClick}>
				{/* <GenericCell shrunk canBeHidden={false}>
					<Link to="admin/event/detail(id: $entity.id)">
						Open detail
					</Link>
				</GenericCell> */}
				<EnumCell
					options={{ race: 'race', training: 'training', trainingCamp: 'trainingCamp' }}
					key="type"
					field="type"
					header="type"
				/>
				<BooleanCell key="registrationClosed" field="registrationClosed" header="registrationClosed" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</Slots.ContentStack>
	</>
}
