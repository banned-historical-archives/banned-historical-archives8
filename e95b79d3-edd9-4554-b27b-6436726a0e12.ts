export default {
  "entity": {
    "id": "e95b79d3-edd9-4554-b27b-6436726a0e12",
    "name": "毛泽东传（三）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "逄先知",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives8/main/e95b79d3-edd9-4554-b27b-6436726a0e12.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（三）",
        "authors": [
          "逄先知"
        ],
        "page_start": 1,
        "page_end": 472,
        "dates": []
      }
    ],"ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "e95b79d3-edd9-4554-b27b-6436726a0e12.pdf",
  "resource_type": "book",
  "version": 2
}