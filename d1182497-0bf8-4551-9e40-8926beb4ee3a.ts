export default {
  "entity": {
    "id": "d1182497-0bf8-4551-9e40-8926beb4ee3a",
    "name": "毛泽东传（一）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "逄先知",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives8/main/d1182497-0bf8-4551-9e40-8926beb4ee3a.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（一）",
        "authors": [
          "逄先知"
        ],
        "page_start": 1,
        "page_end": 464,
        "dates": []
      }
    ],"ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "d1182497-0bf8-4551-9e40-8926beb4ee3a.pdf",
  "resource_type": "book",
  "version": 2
}