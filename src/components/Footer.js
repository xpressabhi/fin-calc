import React from 'react';

const Footer = () => {
	return (
		<footer className='bd-footer py-4 py-md-5 mt-5 bg-body-tertiary'>
			<div className='container py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
				<div className='row'>
					<div className='col-lg-3 mb-3'>
						<a
							className='d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none'
							href='/'
							aria-label='Bootstrap'
						>
							<span className='fs-5'>Fin Calc</span>
						</a>
						<ul className='list-unstyled small'>
							<li className='mb-2'>
								Designed and built with all the love in the world by the{' '}
								<a href='/docs/{{ .Site.Params.docs_version }}/about/team/'>
									Bootstrap team
								</a>{' '}
								with the help of{' '}
								<a href='{{ .Site.Params.repo }}/graphs/contributors'>
									our contributors
								</a>
								.
							</li>
							<li className='mb-2'>
								Code licensed{' '}
								<a
									href='{{ .Site.Params.repo }}/blob/main/LICENSE'
									target='_blank'
									rel='license noopener'
								>
									MIT
								</a>
								, docs{' '}
								<a
									href='https://creativecommons.org/licenses/by/3.0/'
									target='_blank'
									rel='license noopener noreferrer'
								>
									CC BY 3.0
								</a>
								.
							</li>
						</ul>
					</div>
					<div className='col-6 col-lg-2 offset-lg-1 mb-3'>
						<h5>Links</h5>
						<ul className='list-unstyled'>
							<li className='mb-2'>
								<a href='/'>Home</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/'>Docs</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/examples/'>
									Examples
								</a>
							</li>
							<li className='mb-2'>
								<a href='{{ .Site.Params.icons }}'>Icons</a>
							</li>
							<li className='mb-2'>
								<a href='{{ .Site.Params.themes }}'>Themes</a>
							</li>
							<li className='mb-2'>
								<a href='{{ .Site.Params.blog }}'>Blog</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.swag }}'
									target='_blank'
									rel='noopener'
								>
									Swag Store
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-lg-2 mb-3'>
						<h5>Guides</h5>
						<ul className='list-unstyled'>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/getting-started/'>
									Getting started
								</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/examples/starter-template/'>
									Starter template
								</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/getting-started/webpack/'>
									Webpack
								</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/getting-started/parcel/'>
									Parcel
								</a>
							</li>
							<li className='mb-2'>
								<a href='/docs/{{ .Site.Params.docs_version }}/getting-started/vite/'>
									Vite
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-lg-2 mb-3'>
						<h5>Projects</h5>
						<ul className='list-unstyled'>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/bootstrap'
									target='_blank'
									rel='noopener'
								>
									Bootstrap 5
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/bootstrap/tree/v4-dev'
									target='_blank'
									rel='noopener'
								>
									Bootstrap 4
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/icons'
									target='_blank'
									rel='noopener'
								>
									Icons
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/rfs'
									target='_blank'
									rel='noopener'
								>
									RFS
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/examples'
									target='_blank'
									rel='noopener'
								>
									Examples repo
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-lg-2 mb-3'>
						<h5>Community</h5>
						<ul className='list-unstyled'>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/bootstrap/issues'
									target='_blank'
									rel='noopener'
								>
									Issues
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.github_org }}/bootstrap/discussions'
									target='_blank'
									rel='noopener'
								>
									Discussions
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='https://github.com/sponsors/twbs'
									target='_blank'
									rel='noopener'
								>
									Corporate sponsors
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='{{ .Site.Params.opencollective }}'
									target='_blank'
									rel='noopener'
								>
									Open Collective
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='https://stackoverflow.com/questions/tagged/bootstrap-5'
									target='_blank'
									rel='noopener'
								>
									Stack Overflow
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
