<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
	/**
	 * @Route("/", name="homepage")
	 */
	public function homepageAction(Request $request)
	{
		$pageTitle = 'Homepage summercamp frontend';

		$html = $this->get('templating')->render('AppBundle:controllers:homepage.html.twig', [
			'title' => $pageTitle,
			'noLayout' => $request->isXmlHttpRequest()
		]);

		if ($request->isXmlHttpRequest()) {

			return new JsonResponse([
				'pageTitle' => $pageTitle,
				'html' => $html,
				'pageType' => 'homepage'
			]);

		} else {

			return new Response($html);

		}
	}

	/**
	 * @Route("/detail", name="detail")
	 */
	public function detailAction(Request $request)
	{
		$pageTitle = 'Detail summercamp frontend';

		$html = $this->get('templating')->render('AppBundle:controllers:detail.html.twig', [
			'title' => $pageTitle,
			'noLayout' => $request->isXmlHttpRequest()
		]);

		if ($request->isXmlHttpRequest()) {

			return new JsonResponse([
				'pageTitle' => $pageTitle,
				'html' => $html,
				'pageType' => 'detail'
			]);

		} else {

			return new Response($html);

		}
	}

	/**
	 * @Route("/quick-search", name="quickSearch")
	 */
	public function quickSearchAction(Request $request)
	{
		$query = $request->get('query');

		return new JsonResponse([
			['label' => $query . ' test', 'url' => 'detail'],
			['label' => $query . ' test 2', 'url' => 'detail'],
			['label' => $query . ' test 3', 'url' => 'detail'],
		]);
	}

	/**
	 * @Route("/login", name="login")
	 */

	public function loginModalAction(Request $request)
	{
		return $this->render('AppBundle:partials:loginModal.html.twig');
	}

	public function mainNavAction(Request $request)
	{
		return $this->render('AppBundle:partials:mainNav.html.twig');
	}

	public function mainSearchAction(Request $request)
	{
		return $this->render('AppBundle:partials:mainSearch.html.twig');
	}

	public function mainHeaderAction(Request $request)
	{
		return $this->render('AppBundle:partials:mainHeader.html.twig');
	}

	public function mainFooterAction(Request $request)
	{
		return $this->render('AppBundle:partials:mainFooter.html.twig');
	}

	public function topListAction(Request $request)
	{
		return $this->render('AppBundle:partials:listModuleType1.html.twig');
	}

	public function pictureGalleryAction(Request $request)
	{
		return $this->render('AppBundle:partials:galleryModuleType1.html.twig');
	}

	public function featuredArticlesAction(Request $request)
	{
		return $this->render('AppBundle:partials:listModuleType2.html.twig');
	}

}
