import * as React from 'react'
import { BooleanCell, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, Link, LinkButton, NavigateBackLink, Stack } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	{/* this is just a demo how I'd prefer it but teh types are not ready for it. js handles never the less.  */}
	<Title>
		{/* @ts-ignore */}
		<div className='flex items-center gap-x-2'>
			<NavigateBackLink to="admin/clubMember/list">
				Back
			</NavigateBackLink>
			<div>
				Club member detail
			</div>
		</div>
	</Title>
	<Directive name="content-max-width" content={null} />
	<DetailScope entity="ClubMember(id=$id)">
		{/* <Slots.Back>
			<NavigateBackLink to="admin/clubMember/list">
				Back
			</NavigateBackLink>
		</Slots.Back> */}
		<Slots.Actions>
			<LinkButton to="admin/clubMember/edit(id: $entity.id)">
				Edit club member
			</LinkButton>
		</Slots.Actions>
		<Slots.ContentStack>
			<Stack direction="vertical" gap="xlarge">
				<Stack direction="vertical">
					<DisplayTextField field="name" label="name" />
					<DisplayTextField field="email" label="email" />
					<DisplayTextField field="phoneNumber" label="phoneNumber" />
				</Stack>
				<>
					<Stack direction="horizontal" justify="space-between">
						<h2 className="text-xl mt-4">
							EventRegistration
						</h2>
					</Stack>
					<DataGrid entities="EventRegistration[clubMember.id=$id]">
						<GenericCell shrunk canBeHidden={false}>
							<Link to="admin/eventRegistration/detail(id: $entity.id)">
								Open detail
							</Link>
						</GenericCell>
						<HasOneSelectCell field="event" header="event" options="Event.Name" />
						<HasOneSelectCell field="clubMember" header="clubMember" options="ClubMember.name" />
						<BooleanCell key="transportNeeded" field="transportNeeded" header="I need a ride" />
						<BooleanCell key="takingCar" field="takingCar" header="Ill take a car" />
						<GenericCell shrunk canBeHidden={false}>
							<DeleteEntityButton immediatePersist />
						</GenericCell>
					</DataGrid>
				</>
			</Stack>
		</Slots.ContentStack>
	</DetailScope>
</>
