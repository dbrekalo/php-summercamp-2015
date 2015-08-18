<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
	/**
	 * @Route("/", name="homepage")
	 */
	public function homepageAction(Request $request)
	{
		return $this->render('controllers/homepage.html.twig', [
			'title' => 'Homepage summercamp frontend',
			'noLayout' => false
		]);
	}

	/**
	 * @Route("/detail", name="detail")
	 */
	public function detailAction(Request $request)
	{
		return $this->render('controllers/detail.html.twig', [
			'title' => 'Detail summercamp frontend',
			'noLayout' => false
		]);
	}
}
